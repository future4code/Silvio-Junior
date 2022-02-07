import { Products } from "../model/Products";
import { Categories } from '../model/Categories'
import connection from "./connection";

export default class ProductsDatabase {
    async create (product: Products): Promise <void> {
        await connection ('webjump_products')
            .insert({
                sku: product.getSku(),
                name: product.getName(),
                price: product.getPrice(),
                description: product.getDescription(),
                quantity: product.getQunatity()
            })
        
        for (let category of product.getCategories()){
            await connection ('webjump_relations')
                .insert({
                    product_sku: product.getSku(),
                    category_id: category
                })
        }
    }

    async checkId (id: string): Promise <boolean> {
        const product = await connection ('webjump_products')
            .where({sku: id})
            .select('*')

        if (product.length > 0){
            return true
        } else {
            return false
        }
    }

    async get (name: string, page: number): Promise <Products []> {
        const products = await connection ('webjump_products')
            .where('name', "LIKE", `%${name}%`)
            .limit(10)
            .offset((page - 1)*10)
            .select('*')
        
        const productsList: Products [] = []

        for (let product of products){
            const categories = await connection ('webjump_relations')
                .where({
                    product_sku: product.sku
                })
                .join('webjump_categories', 'webjump_relations.category_id', '=', 'webjump_categories.id')
                .select('webjump_categories.id','webjump_categories.name')
            
            const categoriesList: Categories [] = []

            for (let category of categories){
                categoriesList.push(category)
            }

            const newProduct = await new Products(product.sku, product.name, product.description, product.price, product.quantity, categoriesList)

            productsList.push(newProduct)
        }

        return productsList
    }

    async getById (id: string): Promise <Products> {
        const product = await connection ('webjump_products')
            .where({
                sku: id
            })
            .select('*')
        
        const categories = await connection ('webjump_relations')
            .where({
                product_sku: product[0].sku
            })
            .join('webjump_categories', 'webjump_relations.category_id', '=', 'webjump_categories.id')
            .select('webjump_categories.id','webjump_categories.name')
        
        const newProduct = new Products(product[0].sku, product[0].name, product[0].description, product[0].price, product[0].quantity, categories)

        return newProduct
    }

    async edit (product: Products): Promise <void> {
        await connection ('webjump_products')
            .where({sku: product.getSku()})
            .update({
                name: product.getName(),
                price: product.getPrice(),
                description: product.getDescription(),
                quantity: product.getQunatity()
            })
    }

    async addRelation (productSku: string, categoryId: string): Promise <void> {
        await connection ('webjump_relations')
            .insert({
                product_sku: productSku,
                category_id: categoryId
            })
    }

    async deleteRelation (productSku: string, categoryId: string): Promise <void> {
        await connection ('webjump_relations')
        .where({
            product_sku: productSku,
            category_id: categoryId
        })
        .del()
    }

    async delete (id: string): Promise <void> {
        await connection ('webjump_relations')
            .where({
                product_sku: id
            })
            .del()
        
        await connection ('webjump_products')
            .where({
                sku: id
            })
            .del()
    }
}