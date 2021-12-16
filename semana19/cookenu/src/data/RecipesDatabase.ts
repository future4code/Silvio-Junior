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
}