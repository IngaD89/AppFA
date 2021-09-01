import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Inicio} from "./Inicio";
import {Login} from "./Login";
import {Altas} from "./Altas";
import {Pacientes} from "./Pacientes";
import {Notificaciones} from "./Notificaciones";
import {Contacto} from "./Contacto";


export const App = () => {
    return <Router>
        <NavigationBar/>
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route path="/Inicio">
                <Login />
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