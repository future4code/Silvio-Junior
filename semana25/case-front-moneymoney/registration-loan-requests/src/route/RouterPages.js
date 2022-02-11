import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import EditRegistrationPage from "../pages/EditRegistrationPage";
import RequestsPage from "../pages/RequestsPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import ErrorPage from "../pages/ErrorPage";

function RouterPages () {
    return(
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/register_request'>
                    <RegistrationPage />
                </Route>

                <Route exact path='/requests_page' >
                    <RequestsPage />
                </Route>

                <Route exact path='/registration_details/:id' >
                    <EditRegistrationPage />
                </Route>

                <Route path="*" >
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default RouterPages
