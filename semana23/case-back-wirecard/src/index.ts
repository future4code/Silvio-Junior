import app from "./app";
import CardController from "./controller/CardController";
import ClientController from "./controller/ClientController";


const clientController = new ClientController()
const cardController = new CardController()

app.post('/signup', clientController.create)
app.post('/login', clientController.login)
app.post('/card', cardController.create)
app.post('/payments', clientController.pay)

app.get('/payments', clientController.getPayments)
app.get('/payments/:id', clientController.getPaymentByID)