import { Categories } from "../model/Categories";
import { Products } from "../model/Products";
import connection from "./connection";

export default class CategoriesDatabase {
    async create (category: Categories): Promise <void> {
        await connection ('webjump_categories')
            .insert({
                id: category.getId(),
                name: category.getName()
            })
    }

    async get (name: string): Promise <Categories []> {
        const categories = await connection ('webjump_categories')
            .where('name', 'LIKE', `%${name}%`)
            .select('*')
        
        let categoriesList: Categories [] = []

        for (let cat of categories){
            const newCategory = new Categories(cat.id, cat.name)

            categoriesList.push(cat)
        }

        return categoriesList
    }

    async checkId (id: string): Promise <boolean> {
        const category = await connection ('webjump_categories')
            .where({id})
            .select('*')
        
        if (category.length > 0){
            return true
        } else {
            return false
        }
    }

    async getProducts (id: string, page: number): Promise <Products []> {
        const productsIds = await connection ('webjump_relations')
            .where({
                category_id: id
            })
            .limit(10)
            .offset((page -1)*10)
            .select('*')
        
        const categoryName = await connection ('webjump_categories')
            .where({
                id: id
            })
            .select('name')
        
        const productsList: Products [] = []
     
        for (let id of productsIds){
            const product = await connection ('webjump_products')
                .where({
                    sku: id.product_sku
                })
                .select('*')
            
            const newProduct = new Products(product[0].sku, product[0].name, product[0].description, product[0].price, product[0].quantity, categoryName)

            productsList.push(newProduct)
        }

        return productsList
    }

    async edit (id: string, name: string): Promise <void> {
        await connection('webjump_categories')
            .where({id})
            .update({name})
    }

    async delete (id: string): Promise<void> {
        await connection ('webjump_relations')
            .where({
                category_id: id
            })
            .del()
        
        await connection ('webjump_categories')
            .where({id})
            .del()
    }
}