import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Home} from "./Home";
import {Contacto} from "./Contacto";


export const App = () => {
    return <Router>
        <NavigationBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Contacto">
                <Contacto />
            </Route>
        </Switch>
    </Router>

}