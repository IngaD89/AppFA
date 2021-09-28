import * as React from 'react';


export const Pacientes = (props) => {
    return (
        <div>
            <section>
                <div className="paciente__ficha">
                    <h3>Ficha Paciente</h3>
                    <div className="paciente__ficha--details">
                        <p className="paciente__ficha--text">{"ID: " + props.pacientes.id}</p>
                        <p className="paciente__ficha--text">{"NHC: " + props.pacientes.nhc}</p>
                        <p className="paciente__ficha--text">{"Teléfono: " + props.pacientes.telefono}</p>
                        <p className="paciente__ficha--text">{"Fecha de Registro: " + props.pacientes.fechaRegistro}</p>
                        <p className="paciente__ficha--text">{"Prueba de Esfuerzo: " + props.pacientes.pruebaEsfuerzo}</p>
                        <p className="paciente__ficha--text">{"Eco: " + props.pacientes.eco}</p>
                        <p className="paciente__ficha--text">{"Test Daño Miocardio: " + props.pacientes.miocardio && "Test Daño Miocardio: Si"}</p>
                        <p className="paciente__ficha--text">{"Consentimiento Informado: " + props.pacientes.consentimiento && "Consentimiento Informado: Si"}</p>
                    </div>
                    <div className="buttons__wrapper buttons__wrapper--paciente">
                        <input className="btn"
                               type="submit"
                               value="Editar" />
                        <input className="btn"
                               type="submit"
                               value="Borrar" />
                    </div>
                </div>
            </section>
        </div>
    )
}