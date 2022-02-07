import { Products } from "../../src/model/Products";

export default jest.fn (
    async function getProductsByCategoryMock (id: string, page: number): Promise <Products []> {
        const product = new Products('SKUMock', 'nameMock', 'descriptionMock', 12, 12, ['categoriesMock'])

        const list = [product]

        return list
    }
)