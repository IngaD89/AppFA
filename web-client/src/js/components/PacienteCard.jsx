import React from "react";
import {Pacientes} from "./Pacientes";
import background from "./assets/img/hClinic2.jpg";



export const PacienteCard = (props) => {


    return (
        <div className="bk__image"
             style={{ backgroundImage: `url(${background})` }}>

            <section>
                {props.pacientes.map(paciente => <Pacientes pacientes={paciente} key={props.pacientes.id} />)}
            </section>
        </div>
    )
}
