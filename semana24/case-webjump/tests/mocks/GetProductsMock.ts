import { Products } from "../../src/model/Products"

export default jest.fn (
    async function getProductsMock (name: string, page: number): Promise<Products []> {
        const product = new Products('SKUMock', 'nameMock', 'descriptionMock', 12, 12, ['categoriesMock'])

        const list = [product]

        return list
    }
)