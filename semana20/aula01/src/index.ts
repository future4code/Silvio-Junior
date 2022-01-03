import app from "./app";
import deleteUser from "./controller/deleteUser";
import getAll from "./controller/getAll";
import login from "./controller/login";
import signup from "./controller/signup";

app.post('/signup', signup)
app.post('/login', login)

app.get('/all', getAll)

app.delete('/delete/:id', deleteUser)