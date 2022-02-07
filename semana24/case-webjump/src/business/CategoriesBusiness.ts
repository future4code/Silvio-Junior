import { Categories } from "../model/Categories"
import { Products } from "../model/Products"
import IdGenerator from "../services/idGenerator"

export default class CategoriesBusiness {
    async create (
        name: string,
        populate: (category: Categories) => Promise <void>,
        checkId: (id: string) => Promise <boolean>,
        code?: string): Promise <void> {
            if (!name){
                throw new Error ('Informe o nome da categoria no campo name.')
            }
            
            let id: string

            if (code){
                id = code
            } else {
                id = new IdGenerator().generateId()
            }

            const usedId = await checkId(id)

            if (usedId){
                throw new Error ('Este código já está sendo usado em outra categoria.')
            }
            
            const newCategory = new Categories(id, name)
            
            await populate(newCategory)
    }

    async get (
        name: string,
        getCategories: (name: string) => Promise <Categories []> ): Promise <Categories [] > {
            const categories = await getCategories(name)

            return categories
    }

    async getProducts (
        id: string, 
        page: number,
        get: (id: string, page: number) => Promise <Products []> ): Promise <Products []> {
            const products = await get(id, page)

            return products
    }

    async edit (
        id: string, 
        name: string, 
        editCategory: (id: string, name: string) => Promise <void>): Promise <void> {
            if (!id){
                throw new Error ('Informe a ID da categoria a ser modificada.')
            }

            if (!name){
                throw new Error ("Informe o novo nome da categoria.")
            }

            await editCategory(id, name)
        }
    
    async delete (
        id: string,
        deleteCategory: (id: string) => Promise <void>): Promise <void> {
        if (!id){
            throw new Error ('Informe a ID da categoria a ser exclída.')
        }

        await deleteCategory(id)
    }
}