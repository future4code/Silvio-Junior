import app from "./app";
import CreateRecipe from "./endpoints/createRecipe";
import GetOwnProfile from "./endpoints/getOwnProfile";
import GetUserProfile from "./endpoints/getUserProfile";
import Login from "./endpoints/login";
import SignUp from "./endpoints/signup";

app.post('/users/signup', SignUp)
app.post('/users/login', Login)
app.post('/recipes', CreateRecipe)

app.get('/user/profile', GetOwnProfile)
app.get(`/users/:id`, GetUserProfile)