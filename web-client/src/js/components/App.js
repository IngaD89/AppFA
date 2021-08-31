import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Home} from "./Home";
import {Login} from "./Login";
import {Altas} from "./Altas";
import {Pacientes} from "./Pacientes";
import {Notificaciones} from "./Notificaciones";
import {Contacto} from "./Contacto";
import {Altas} from "./Altas";


export const App = () => {
    return <Router>
        <NavigationBar/>
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
            <Route path="/Pacientes">
                <Pacientes />
            </Route>
            <Route path="/Notificaciones">
                <Notificaciones />
            </Route>
            <Route path="/Contacto">
<<<<<<< HEAD
                <Contacto />
=======
                <Contacto/>
                <Route path="Altas">
                <Altas />
                </Route>
>>>>>>> 06f046c51221a516cdbca3d8ac8e42f8080334e1
            </Route>
    </Switch>
</Router>

}