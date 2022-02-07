import { Products } from "../../src/model/Products";

export default jest.fn (
    async function getProductsByIdMock (id: string): Promise <Products> {
        const product = new Products('SKUMock', 'nameMock', 'descriptionMock', 12, 12, ['categoriesMock'])

        return product
    }
)