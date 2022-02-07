import { Products } from "../model/Products"
import IdGenerator from "../services/idGenerator"

export default class ProductsBusiness {
    async create (
        name: string, 
        price: number, 
        description: string, 
        quantity: number, 
        categories: string [], 
        checkId: (id: string) => Promise <boolean>,
        populate: (product: Products) => Promise <void>,
        sku?: string): Promise <void> {
            if (!name || !price || !description || !quantity || !categories){
                throw new Error ('Envie as informações obrigatórias (name, price, description, quantity e categories).')
            }

            if (price < 0){
                throw new Error ("Informe um preço válido")
            }

            if (quantity < 0 || quantity % 1 !== 0){
                throw new Error ('Informe uma quantidade válida.')
            }

            let id: string

            if (sku){
                id = sku
            } else {
                id = new IdGenerator().generateId()
            }

            const usedId = await checkId(id)

            if (usedId){
                throw new Error ('Este SKU já está sendo usado em outro produto.')
            }

            const newProduct = new Products(id, name, description, price, quantity, categories)

            await populate(newProduct)
    }

    async get (
        name: string,
        page: number,
        getProducts: (name: string, page: number) => Promise <Products []>): Promise <Products []> {
            const products = await getProducts(name, page)

            return products
    }

    async getById (
        id: string,
        getProduct: (id: string) => Promise <Products> ): Promise <Products> {
        if (!id){
            throw new Error ('Envie o SKU do produto.')
        }

        const product = await getProduct(id)

        return product
    }

    async edit (
        id: string,
        name: string, 
        price: number, 
        description: string, 
        quantity: number, 
        addRelation: string, 
        deleteRelation: string,
        getProduct: (id: string) => Promise <Products>,
        editProduct: (product: Products) => Promise <void>,
        addCategory: (productSku: string, categoryId: string) => Promise <void>,
        deleteCategory: (productSku: string, categoryId: string) => Promise <void>): Promise <void> {
            if (!id){
                throw new Error ('Envie o SKU do produto a ser alterado.')
            }

            if (name || price || description || quantity){
                const product = await getProduct(id)

                let newName: string
                let newPrice: number
                let newDescription: string
                let newQuantity: number

                if (name){
                    newName = name
                } else {
                    newName = product.getName()
                }

                if (price){
                    newPrice = price
                } else {
                    newPrice = product.getPrice()
                }

                if (description){
                    newDescription = description
                } else {
                    newDescription = product.getDescription()
                }

                if (quantity){
                    newQuantity = quantity
                } else {
                    newQuantity = product.getQunatity()
                }

                if (newPrice < 0){
                    throw new Error ("Informe um preço válido")
                }
    
                if (newQuantity < 0 || newQuantity % 1 !== 0){
                    throw new Error ('Informe uma quantidade válida.')
                }

                const newProduct = new Products(product.getSku(), newName, newDescription, newPrice,newQuantity, product.getCategories())

                await editProduct(newProduct)
            }

            if (addRelation){
                await addCategory(id, addRelation)
            }

            if (deleteRelation){
                await deleteCategory(id, deleteRelation)
            }
        }

        async delete (
            id: string,
            deleteProduct: (id: string) => Promise <void>): Promise <void> {
            if (!id){
                throw new Error ("Envie o SKU do produto a ser deletado.")
            }

            await deleteProduct(id)
        }
}