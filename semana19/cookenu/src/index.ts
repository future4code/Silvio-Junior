import app from "./app";
import CreateRecipe from "./endpoints/createRecipe";
import FollowUser from "./endpoints/followUser";
import GetFeed from "./endpoints/getFeed";
import GetOwnProfile from "./endpoints/getOwnProfile";
import GetRecipeById from "./endpoints/getRecipeById";
import GetUserProfile from "./endpoints/getUserProfile";
import Login from "./endpoints/login";
import SignUp from "./endpoints/signup";
import UnfollowUser from "./endpoints/unfollowUser";

app.post('/users/signup', SignUp)
app.post('/users/login', Login)
app.post('/recipes', CreateRecipe)
app.post('/users/follow', FollowUser)
app.post('/users/unfollow', UnfollowUser)

app.get('/users/feed', GetFeed)
app.get('/user/profile', GetOwnProfile)
app.get(`/users/:id`, GetUserProfile)
app.get('/recipes/:id', GetRecipeById)
