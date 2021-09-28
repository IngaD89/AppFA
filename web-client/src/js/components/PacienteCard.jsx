import React from "react";
import {Pacientes} from "./Pacientes";
import background from "./assets/img/hClinic.jpg";
import logo__section from "./assets/img/FA-APP-logo.svg";


export const PacienteCard = (props) => {
    return (
        <div className="bk__image"
             style={{ backgroundImage: `url(${background})` }}>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>
                <div className="pacientes__wrapper">
                    <h2>Pacientes</h2>
                    <div>{props.pacientes.map(paciente => <Pacientes pacientes={paciente} key={props.pacientes.id} />)}</div>
                </div>
            </section>
        </div>
    )
}
