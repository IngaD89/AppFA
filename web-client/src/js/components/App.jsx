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
<<<<<<< HEAD:web-client/src/js/components/App.jsx
            </Route>
            <Route path="/Altas">
                <Altas />
            </Route>
=======
            </Route>
            <Route path="/Altas">
                <Altas />
            </Route>
>>>>>>> 7ca1f9103459429ca6fd3e7bae0b1cc7397cf593:web-client/src/js/components/App.js
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