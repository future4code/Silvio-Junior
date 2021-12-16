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
            const recipe = new Recipes(rec.id, rec.title, rec.description, rec.date, rec.user_id)
            return recipe
        })
        
        return feedRecipes
    }

}