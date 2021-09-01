import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Home} from "./Home";
import {Login} from "./Login";
import {Altas} from "./Altas";
import {Pacientes} from "./Pacientes";
import {Notificaciones} from "./Notificaciones";
import {Contacto} from "./Contacto";



export const App = () => {
    return <Router>
        <NavigationBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Altas">
                <Altas />
            </Route>

            <Route path="/Altas">
                <Altas />
            </Route>

            <Route path="/Pacientes">
                <Pacientes />
            </Route>
            <Route path="/Notificaciones">
                <Notificaciones />
            </Route>
            <Route path="/Contacto">
                <Contacto />
            </Route>

    </Switch>
</Router>

}