import { Request, Response } from "express";
import RecipesDatabase from "../data/RecipesDatabase";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function GetFeed (req: Request, res: Response): Promise <void>{
    try {
        const token = req.headers.authorization

        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()

        const follows = await userDB.getFollows(tokenData.id)

        if (follows?.length === 0){
            throw new Error ("Usuário não segue nenhum outro usuário.")
        }

        let recipes = []
        const recipesDB = new RecipesDatabase()
        
        for (let follow of follows){
            const newRecipes = await recipesDB.getByUser(follow)

            recipes.push(newRecipes)
        }
        
        res.status(200).send(recipes)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}