import app from "./app";
import CategoriesController from "./controller/CategoriesController";
import ProductsController from "./controller/ProductsController";

const categoryController = new CategoriesController()
const productController = new ProductsController()

app.post('/categories', categoryController.create)
app.post('/products', productController.create)

app.get('/categories?:name', categoryController.get)
app.get('/categories/:id', categoryController.getProducts)
app.get('/products?:name?:page', productController.get)
app.get('/products/:id', productController.getById)

app.put('/categories/:id', categoryController.edit)
app.put('/products/:id', productController.edit)

app.delete('/products/:id', productController.delete)
app.delete('/categories/:id', categoryController.delete)