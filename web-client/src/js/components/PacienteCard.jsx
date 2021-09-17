import React from "react";
import {Pacientes} from "./Pacientes";



export const PacienteCard = (props) => {


    return (
        <div>
            <section>
                {props.pacientes.map(paciente => <Pacientes pacientes={paciente} key={props.pacientes.id} />)}
            </section>
        </div>
    )
}
