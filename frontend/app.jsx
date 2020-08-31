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

export default function App() {
    return (
        <Router>
            <NavigationBar />
            <Switch>
            <Route path='/' exact><HomePage /></Route>

            </Switch>
            <Footer />
        </Router>
    )
}