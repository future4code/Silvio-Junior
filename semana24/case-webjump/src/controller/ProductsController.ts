import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";
import ProductsDatabase from "../data/ProductsDatabase";

export default class ProductsController {
    async create (req: Request, res: Response): Promise <void> {
        try {
            const {sku, name, price, description, quantity, categories} = req.body
            const checkId = new ProductsDatabase().checkId
            const populate = new ProductsDatabase().create

            await new ProductsBusiness().create(name, price, description, quantity, categories, checkId, populate, sku)

            res.status(200).send({message: "Produto cadastrado."})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async get (req: Request, res: Response): Promise <void> {
        try {
            const name = req.query.name as string || '%'
            const page = Number(req.query.page) || 1
            const getProducts = new ProductsDatabase().get

            const products = await new ProductsBusiness().get(name, page, getProducts)

            res.status(200).send({products: products})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async getById (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id as string
            const getProduct = new ProductsDatabase().getById

            const product = await new ProductsBusiness().getById(id, getProduct)

            res.status(200).send({product: product})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async edit (req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string
            const {name, price, description, quantity, addRelation, deleteRelation} = req.body
            const getProduct = new ProductsDatabase().getById
            const editProduct = new ProductsDatabase().edit
            const addCategory = new ProductsDatabase().addRelation
            const deleteCategory = new ProductsDatabase().deleteRelation

            await new ProductsBusiness().edit(id, name, price, description, quantity, addRelation, deleteRelation, getProduct, editProduct, addCategory, deleteCategory)

            res.status(200).send({message: "Alteração realizada com sucesso."})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async delete (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id as string
            const deleteProduct = new ProductsDatabase().delete

            await new ProductsBusiness().delete(id, deleteProduct)

            res.status(200).send({message: "Produto deletado."})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}