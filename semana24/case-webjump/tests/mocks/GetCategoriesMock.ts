import { Categories } from "../../src/model/Categories";

export default jest.fn (
    async function getCategoriesMock (name: string): Promise<Categories []> {
        const cat = new Categories('CategoryID', "CategoryName")
        const list = [cat]

        return list
    }
)