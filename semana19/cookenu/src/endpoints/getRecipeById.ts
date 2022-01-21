import { Request, Response } from "express";
import RecipesDatabase from "../data/RecipesDatabase";

export default async function GetRecipeById (req: Request, res: Response): Promise <void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization

        if (!id){
            throw new Error ("Informe a ID da receita!")
        }

        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        const recipeDB = new RecipesDatabase()
        const recipe = await recipeDB.getById(id)

        res.status(200).send(recipe)
        
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}