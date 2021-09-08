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


/*const cards =
    {
        id: 1,
        nhc: "123",
        telefono: "+34 123456789",
        primeraLlamada: "15/09/2021",
        segundaLlamada: "15/09/2021",
        terceraLlamada: "15/09/2021",
        pruebaEsfuerzo: "15/09/2021",
        eco: "15/09/2021",
        archivo: "SI",
        consentimiento: "SI"

}*/

/*export function Card() {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-5" key={card.id}>
                            <PacienteCard
                                nhc={card.nhc}
                                telefono={card.telefono}
                                primeraLlamada={card.primeraLlamada}
                                segundaLlamada={card.segundaLlamada}
                                terceraLlamada={card.terceraLlamada}
                                pruebaEsfuerzo={card.pruebaEsfuerzo}
                                eco={card.eco}
                                archivo={card.archivo}
                                consentimiento={card.consentimiento}/>
                        </div>
                    ))
                }

            </div>
        </div>
    )*/


    export const App = () => {

        const pacientesApi = new PacientesApi();

        const [pacientes, setPacientes] = useState([])


        useEffect(() => {
                pacientesApi.getPacientes()
                    .then(setPacientes)
        }, [])


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
                    <Altas/>
                </Route>
                <Route path="/pacientes">
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