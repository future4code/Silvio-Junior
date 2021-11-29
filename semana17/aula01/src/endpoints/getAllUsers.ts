import selectAllUsers from "../query/selectAllUsers"
import express, { Express, Request, Response } from "express"
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());



export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name?.toString() || '%'
        const type = req.query.type?.toString() || '%'
        const sort = req.query.sort?.toString() === 'name' ? 'name' : req.query.order?.toString() === 'type' ? 'type' : 'email'
        const order = req.query.order?.toString() === "DESC" ? 'DESC' : "ASC"
        const page = Number(req.query.page) || 1
        const limit = 5
        const offset = (page - 1) * limit

        const users = await selectAllUsers(name, type, sort, order, page, limit, offset)
        
        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found")
        }
        res.status(200).send({pagina: page, users: users})
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
 }