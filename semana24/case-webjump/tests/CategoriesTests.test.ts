import CategoriesBusiness from "../src/business/CategoriesBusiness"
import CheckIdMockFalse from "./mocks/CheckIdMockFalse"
import CheckIdMockTrue from "./mocks/CheckIdMockTrue"
import DeleteCategoryMock from "./mocks/DeleteCategoryMock"
import EditCategoryMock from "./mocks/EditCategoryMock"
import GetCategoriesMock from "./mocks/GetCategoriesMock"
import GetProductsByCategoryMock from "./mocks/GetProductsByCategoryMock"
import PopulateCategoryMock from "./mocks/PopulateCategoryMock"

describe ('Categories Tests', () => {
    test('Create Category -- Sucess Case', async () => {
        try {
            await new CategoriesBusiness().create('Mock Name', PopulateCategoryMock, CheckIdMockFalse, 'Code_Mock')

            expect(PopulateCategoryMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Category -- No name', async () => {
        try {
            await new CategoriesBusiness().create('', PopulateCategoryMock, CheckIdMockFalse, 'Code_Mock')
        } catch (error: any) {
            expect(error.message).toBe('Informe o nome da categoria no campo name.')
        } finally {
            expect.assertions(1)
        }
    })

    test('Create Category -- Invalid Code', async () => {
        try {
            await new CategoriesBusiness().create('Mock Name', PopulateCategoryMock, CheckIdMockTrue, 'Code_Mock')
        } catch (error: any) {
            expect(error.message).toBe('Este código já está sendo usado em outra categoria.')
        } finally {
            expect.assertions(1)
        }
    })

    test('Get Categories', async () => {
        try {
            const categories = await new CategoriesBusiness().get('%', GetCategoriesMock)

            expect(GetCategoriesMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally{[
            expect.assertions(1)
        ]}
    })

    test('Get Products By Category -- Sucess Case', async () => {
        try {
            const products = await new CategoriesBusiness().getProducts('CategoryId', 1, GetProductsByCategoryMock)

            expect(GetProductsByCategoryMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test('Edit Category -- Sucess Case', async () => {
        try {
            await new CategoriesBusiness().edit('CategoryId', 'categoryNewName', EditCategoryMock)

            expect(EditCategoryMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test('Edit Category -- No name', async () => {
        try {
            await new CategoriesBusiness().edit('CategoryId', '', EditCategoryMock)
        } catch (error: any) {
            expect(error.message).toBe("Informe o novo nome da categoria.")
        } finally {
            expect.assertions(1)
        }
    })

    test ('Edit Category -- no ID', async () => {
        try {
            await new CategoriesBusiness().edit('', 'categoryNewName', EditCategoryMock)
        } catch (error: any) {
            expect(error.message).toBe('Informe a ID da categoria a ser modificada.')
        } finally {
            expect.assertions(1)
        }
    })

    test ('Delete Category -- Sucess Case', async () => {
        try {
            await new CategoriesBusiness().delete('CategoryId', DeleteCategoryMock)

            expect(DeleteCategoryMock).toBeCalledTimes(1)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            expect.assertions(1)
        }
    })

    test ('Delete Caetegory -- No ID', async () => {
        try {
            await new CategoriesBusiness().delete('', DeleteCategoryMock)
        } catch (error: any) {
            expect(error.message).toBe('Informe a ID da categoria a ser exclída.')
        } finally {
            expect.assertions(1)
        }
    })
})