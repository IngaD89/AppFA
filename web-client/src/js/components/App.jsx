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

    const [pacientes, setPacientes] = useState([]);

    const [necesitoActualizar, setNecesitoActualizar] = useState(true)


    // a´rreglar :^actualizar cuando se crea
    useEffect(() => {
        if(necesitoActualizar) {
            pacientesApi.getPacientes()
                .then(setPacientes)
                .then(_ => setNecesitoActualizar(false))
        }
    }, [necesitoActualizar])


    const cuandoTermines = () => {
      setNecesitoActualizar(true)
    }


        return <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/">
                    <Inicio/>
                </Route>
                <Route path="/inicio">
                    <Login/>
                </Route>
                <Route path="/altas">
                    <Altas cuandoTermines={cuandoTermines}/>
                </Route>
                <Route exact path="/pacientes">
                    <PacienteCard pacientes={pacientes}/>
                </Route>
                <Route path="/notificaciones">
                    <Notificaciones/>
                </Route>
                <Route path="/contacto">
                    <Contacto/>
                </Route>
            </Switch>
        </Router>


}