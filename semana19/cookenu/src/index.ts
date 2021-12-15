import app from "./app";
import SignUp from "./endpoints/signup";

app.post('/users/signup', SignUp)