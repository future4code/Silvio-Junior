import { Request, Response } from "express";
import RecipesDatabase from "../data/RecipesDatabase";
import { Authenticator } from "../services/Authenticator";
import FormatDate from "../services/FormatDate";
import { IdGenerator } from "../services/idGenerator";
import Recipes from "../types/Recipes";

export default async function CreateRecipe (req:Request, res: Response): Promise <void> {
    try {
        const {title, description} = req.body
        const token = req.headers.authorization

        if (!title){
            throw new Error ("Informe o título da receita!")
        }

        if (!description) {
            throw new Error ("Informe a descrição da receita!")
        }

        if (!token){
            throw new Error ("Passe o token no campo authorization!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const date = new FormatDate().create()
        const id = new IdGenerator().generateId()
        const recipe = new Recipes(id, title, description, date, tokenData.id)

        const recipeDB = new RecipesDatabase()
        await recipeDB.create(recipe)

        res.status(200).send("Receita criada!")
        
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}