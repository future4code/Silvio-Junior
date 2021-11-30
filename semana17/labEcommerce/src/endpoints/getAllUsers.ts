import express, { Express, Request, Response } from "express"
import cors from 'cors'
import connection from "../data/connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await connection('labecommerce_users')

        if (users.length === 0){
            throw new Error('Nenhum usuário encontrado!')
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default getAllUsers