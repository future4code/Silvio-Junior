import { Request, Response } from "express";
import RecipesDatabase from "../data/RecipesDatabase";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function GetFeed (req: Request, res: Response): Promise <void>{
    try {
        const token = req.headers.authorization
        const page = Number(req.query.page) || 0

        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()
        const recipesDB = new RecipesDatabase()

        const recipes = await recipesDB.getFeed(tokenData.id, page)

        let recipesResult = []

        for (let recipe of recipes){
            let userRecId = recipe.getUserId()
            const username = await userDB.getName(userRecId)

            const recResult = {
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                date: recipe.getDate(),
                userId: recipe.getUserId(),
                username: username
            }

            recipesResult.push(recResult)
        }

       res.status(200).send(recipesResult)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}