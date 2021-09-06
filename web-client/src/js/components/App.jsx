import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Inicio} from "./Inicio";
import {Login} from "./Login";
import {Altas} from "./Altas";
import {Notificaciones} from "./Notificaciones";
import {Contacto} from "./Contacto";
import {PacienteCard} from "./PacienteCard";
import {useEffect, useState} from "react";
import {PacientesApi} from "../apis/PacientesApi";


export const App = () => {

    const pacientesApi = new PacientesApi();

    const [pacientes, setPacientes] = useState([])

    const [update, setUpdate] = useState(true)

    useEffect(() => {
        if(update){
        pacientesApi.getPacientes()
            .then(setPacientes)
            .then(_=>setUpdate(false))}
    }, [update])





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
                <PacienteCard pacientes={pacientes}/>
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