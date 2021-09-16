import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";


export const Pacientes = (props) => {
    return (
        <div>
            <section>
                <div>{props.pacientes.nhc}</div>
                <div>{props.pacientes.telefono}</div>
                <div>{props.pacientes.fechaRegistro}</div>
                <div>{props.pacientes.primeraLlamada}</div>
                <div>{props.pacientes.segundaLlamada}</div>
                <div>{props.pacientes.terceraLlamada}</div>
                <div>{props.pacientes.pruebaEsfuerzo}</div>
                <div>{props.pacientes.eco}</div>
                <div>{props.pacientes.miocardio && "miocardio" }</div>
                <div>{props.pacientes.consentimiento}</div>
                <div>{props.pacientes.archivo}</div>
            </section>
        </div>
    )
}