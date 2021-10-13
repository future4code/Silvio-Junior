import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage'
import TripDetailsPage from '../pages/TripDetailsPage'
import LoginPage from '../pages/LoginPage'
import ListTripPage from '../pages/ListTripPage'
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import AdminHomePage from '../pages/AdminHomePage'
import Header from "../components/Header";
import Footer from '../components/Footer'

function RouterPages () {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>

                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/trip_details'>
                    <TripDetailsPage />
                </Route>

                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route exact path='/trips'>
                    <ListTripPage />
                </Route>

                <Route exact path='/create_trip'>
                    <CreateTripPage />
                </Route>

                <Route exact path='/application_form'>
                    <ApplicationFormPage />
                </Route>

                <Route exact path='/admin'>
                    <AdminHomePage />
                </Route>

            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouterPages