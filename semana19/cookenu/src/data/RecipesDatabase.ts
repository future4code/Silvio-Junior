import FormatDate from "../services/FormatDate";
import Recipes from "../types/Recipes";
import connection from "./connection";

export default class RecipesDatabase {
    async create (recipe: Recipes){
        await connection ('cookenu_recipes')
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                date: recipe.getDate(),
                user_id: recipe.getUserId()
            })
    }

    async getById (recipeId: string): Promise <Recipes | undefined>{
        const rec = await connection ('cookenu_recipes')
            .where({id: recipeId})
        
        const {id, title, description, date, user_id: userId} = rec[0]

        const newDate = new Date(date)
        const createdAt = new FormatDate().format(newDate)

        const recipes = new Recipes(id, title, description, createdAt, userId)

        return recipes
    }

    async getByUser (userId: string): Promise <Recipes []> {
        const recipes = await connection ('cookenu_recipes')
            .where({user_id: userId})
            .select("*") 

        const feedRecipes = recipes.map((rec) => {
            const dateFormat = new FormatDate().format(rec.date)
            const recipe = new Recipes(rec.id, rec.title, rec.description, dateFormat, rec.user_id)
            return recipe
        })
        
        return feedRecipes
    }

    async getFeed(id: string, page: number): Promise<Recipes []>{
        const recipes = await connection ('cookenu_follows')
            .where({
                user_following_id: id
            })
            .join('cookenu_recipes', 'cookenu_recipes.user_id', '=', 'cookenu_follows.user_followed_id')
            .select('cookenu_recipes.id as id', 'cookenu_recipes.title as title', 'cookenu_recipes.description as description', 'cookenu_recipes.date as date', 'cookenu_recipes.user_id as userId')
            .orderBy('cookenu_recipes.date', 'DESC')
            .limit(15)
            .offset(page * 15)
        
        const feedRecipes = recipes.map((rec) => {
            const dateFormat = new FormatDate().format(rec.date)
            const recipe = new Recipes(rec.id, rec.title, rec.description, dateFormat, rec.userId)
            return recipe
        })
            
        return feedRecipes

    }

}