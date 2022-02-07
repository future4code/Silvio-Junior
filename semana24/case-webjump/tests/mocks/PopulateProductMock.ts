import { Products } from "../../src/model/Products";


export default jest.fn(
    async function PopulateProductsMock (product: Products): Promise <void> {}
)