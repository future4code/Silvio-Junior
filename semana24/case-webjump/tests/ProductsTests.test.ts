import ProductsBusiness from "../src/business/ProductsBusiness"
import AddRelationMock from "./mocks/AddRelationMock"
import CheckIdMockFalse from "./mocks/CheckIdMockFalse"
import CheckIdMockTrue from "./mocks/CheckIdMockTrue"
import DeleteProductMock from "./mocks/DeleteProductMock"
import DeleteRelationMock from "./mocks/DeleteRelationMock"
import EditProductMock from "./mocks/EditProductMock"
import GetProductByIdMock from "./mocks/GetProductByIdMock"
import GetProductsMock from "./mocks/GetProductsMock"
import PopulateProductMock from "./mocks/PopulateProductMock"

describe ('Products Test', () => {
    test('Create Product -- Sucess Case', async () => {
        try {
            await new ProductsBusiness().create('ProductName', 12, 'ProductDescription', 12, ['ProductCategories'], CheckIdMockFalse, PopulateProductMock, 'productSKU')

            expect(PopulateProductMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Product -- no info', async () => {
        try {
            await new ProductsBusiness().create('', 12, 'ProductDescription', 12, ['ProductCategories'], CheckIdMockFalse, PopulateProductMock, 'productSKU')
        } catch (error: any) {
            expect(error.message).toBe('Envie as informações obrigatórias (name, price, description, quantity e categories).')
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Product -- invalid price', async () => {
        try {
            await new ProductsBusiness().create('ProductName', -12, 'ProductDescription', 12, ['ProductCategories'], CheckIdMockFalse, PopulateProductMock, 'productSKU')
        } catch (error: any) {
            expect(error.message).toBe("Informe um preço válido")
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Product -- invalid qunatity', async () => {
        try {
            await new ProductsBusiness().create('ProductName', 12, 'ProductDescription', 12.4, ['ProductCategories'], CheckIdMockFalse, PopulateProductMock, 'productSKU')
        } catch (error: any) {
            expect(error.message).toBe('Informe uma quantidade válida.')
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Product -- invalid qunatity', async () => {
        try {
            await new ProductsBusiness().create('ProductName', 12, 'ProductDescription', -12, ['ProductCategories'], CheckIdMockFalse, PopulateProductMock, 'productSKU')
        } catch (error: any) {
            expect(error.message).toBe('Informe uma quantidade válida.')
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Product -- invalid SKU', async () => {
        try {
            await new ProductsBusiness().create('ProductName', 12, 'ProductDescription', 12, ['ProductCategories'], CheckIdMockTrue, PopulateProductMock, 'productSKU')
        } catch (error: any) {
            expect(error.message).toBe('Este SKU já está sendo usado em outro produto.')
        } finally {
            expect.assertions(1)
        }
    })

    test('Get Products', async () => {
        try {
            const products = await new ProductsBusiness().get('%', 1, GetProductsMock)

            expect(GetProductsMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test ('Get Products By Id -- sucess case', async () => {
        try {
            const product = await new ProductsBusiness().getById('ProductId', GetProductByIdMock)

            expect(GetProductByIdMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test('Get Product By ID -- no id', async () => {
        try {
            const product = await new ProductsBusiness().getById('', GetProductByIdMock)
        } catch (error: any) {
            expect(error.message).toBe('Envie o SKU do produto.')
        } finally {
            expect.assertions(1)
        }
    })

    test ('Edit product -- sucess case', async () => {
        try {
            await new ProductsBusiness().edit('productid','newProductname', 100, '', 12, '', '', GetProductByIdMock, EditProductMock, AddRelationMock, DeleteRelationMock)

            expect(EditProductMock).toBeCalledTimes(1)
            expect(AddRelationMock).not.toBeCalled()
            expect(DeleteRelationMock).not.toBeCalled()
        } catch (error: any) {
            console.log (error.message)
        } finally {
            expect.assertions(3)
        }
    })

    test ('delete Product', async () => {
        try {
            await new ProductsBusiness().delete('productId', DeleteProductMock)

            expect(DeleteProductMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })
})