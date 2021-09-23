import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Inicio} from "./Inicio";
import {Altas} from "./Altas";
import {Alerts} from "./Alerts";
import {Contacto} from "./Contacto";
import {PacienteCard} from "./PacienteCard";
import {useEffect, useState} from "react";
import {PacientesApi} from "../apis/PacientesApi";



export const App = () => {

    const pacientesApi = new PacientesApi();

    const [pacientes, setPacientes] = useState([]);

    const [necesitoActualizar, setNecesitoActualizar] = useState(true)


    // arreglar : actualizar cuando se crea
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
                <Route path="/altas">
                    <Altas cuandoTermines={cuandoTermines}/>
                </Route>
                <Route exact path="/pacientes">
                    <PacienteCard pacientes={pacientes}/>
                </Route>
                <Route path="/alerts">
                    <Alerts />
                </Route>
                <Route path="/contacto">
                    <Contacto/>
                </Route>
            </Switch>
        </Router>


}