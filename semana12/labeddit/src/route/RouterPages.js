import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PostPage from '../pages/PostPage'

function RouterPages () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/login' >
                    <LoginPage />
                </Route>

                <Route exact path='/signup' >
                    <SignUpPage />
                </Route>

                <Route exact path='/post/:id' >
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterPages