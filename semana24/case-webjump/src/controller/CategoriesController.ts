import { Request, Response } from "express";
import CategoriesBusiness from "../business/CategoriesBusiness";
import CategoriesDatabase from "../data/CategoriesDatabase";

export default class CategoriesController {
    async create (req: Request, res: Response): Promise <void> {
        try {
            const {name, code} = req.body
            const populate = new CategoriesDatabase().create
            const checkId = new CategoriesDatabase().checkId
    
            await new CategoriesBusiness().create(name, populate, checkId, code)

            res.status(200).send({message: 'Categoria criada.'})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async get (req: Request, res: Response): Promise <void> {
        try {
            const name: string = req.query.name as string || '%'
            const getCategories = new CategoriesDatabase().get

            const categories = await new CategoriesBusiness().get(name, getCategories)

            res.status(200).send({categories: categories})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async getProducts (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id as string
            const page = Number(req.query.page) || 1
            const get = new CategoriesDatabase().getProducts
            
            const products = await new CategoriesBusiness().getProducts(id, page, get)

            res.status(200).send({products: products})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async edit (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id as string
            const {name} = req.body
            const editCategory = new CategoriesDatabase().edit

            await new CategoriesBusiness().edit(id, name, editCategory)

            res.status(200).send({message: "Categoria editada."})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async delete (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id as string
            const deleteCategory = new CategoriesDatabase().delete

            await new CategoriesBusiness().delete(id, deleteCategory)
            
            res.status(200).send({message: "Categoria deletada."})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}