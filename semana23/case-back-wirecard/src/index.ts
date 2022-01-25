import app from "./app";
import CardController from "./controller/CardController";
import ClientController from "./controller/ClientController";


const clientController = new ClientController()
const cardController = new CardController()

app.post('/signup', clientController.create)
app.post('/login', clientController.login)
app.post('/card', cardController.create)