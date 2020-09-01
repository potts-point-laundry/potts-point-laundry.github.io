import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavigationBar from './components/NavigationBar.jsx'
import Footer from './components/Footer.jsx'

import HomePage from './pages/Home.jsx'
import FindUsPage from './pages/FindUs.jsx'
import AboutUsPage from './pages/aboutus.jsx'
import SevicesPage from './pages/Services.jsx'

export default function App() {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route path='/' exact><HomePage /></Route>
                <Route path='/aboutus' exact><AboutUsPage /></Route>
                <Route path='/findus' exact><FindUsPage /></Route>
                <Route path='/services' exact><SevicesPage /></Route>
            </Switch>
            <Footer />
        </Router>
    )
}