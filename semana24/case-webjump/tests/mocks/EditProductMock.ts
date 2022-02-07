import { Products } from "../../src/model/Products";

export default jest.fn (
    async function editProductMock (product: Products): Promise <void> {}
)