import * as React from 'react';



export const Pacientes = (props) => {
    return (
        <div>
            <section>
                    <div key={props.pacientes.id}></div>
                    <div>{props.pacientes.nhc}</div>
                    <div>{props.pacientes.telefono}</div>
                    <div>{props.pacientes.consentimiento}</div>
                    <div>{props.pacientes.primeraLlamada}</div>
                    <div>{props.pacientes.segundaLlamada}</div>
                    <div>{props.pacientes.terceraLlamada}</div>
                    <div>{props.pacientes.pruebaEsfuerzo}</div>
                    <div>{props.pacientes.eco}</div>
                    <div>{props.pacientes.archivo}</div>
            </section>
        </div>
    )
}