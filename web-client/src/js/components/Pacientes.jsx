import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";



export const Pacientes = (props) => {

    return (
        <div className="bk__image"
             style={{ backgroundImage: `url(${background})` }}>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <div className="logo__section">
                        <img className="logo__img" src={logo__section} alt={'LogoApp'}/>
                    </div>

                    <h2 className="card__title">Pacientes</h2>

                    <div className="paciente__ficha">
                        <h3>Ficha Paciente</h3>
                        <div className="paciente__ficha--details">
                            <p className="paciente__ficha--text">{"ID: " + props.pacientes.id}</p>
                            <p className="paciente__ficha--text">{"NHC: " + props.pacientes.nhc}</p>
                            <p className="paciente__ficha--text">{"Teléfono: " + props.pacientes.telefono}</p>
                            <p className="paciente__ficha--text">{"Fecha de Registro: " + props.pacientes.fechaRegistro}</p>
                            <p className="paciente__ficha--text">{"Prueba de Esfuerzo: " + props.pacientes.pruebaEsfuerzo}</p>
                            <p className="paciente__ficha--text">{"Eco: " + props.pacientes.eco}</p>
                            <p className="paciente__ficha--text">{props.pacientes.miocardio && "Test Daño Miocardio: Sí"}</p>
                            <p className="paciente__ficha--text">{props.pacientes.consentimiento && "Consentimiento Informado: Sí"}</p>



                        </div>

                        <div className="buttons__wrapper--card">
                            <input className="btn"
                                   type="submit"
                                   value="Editar"
                            />
                            <input className="btn"
                                   type="submit"
                                   value="Borrar"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
{/*<div className="pacientes__searchBar">
                        <input className="btn"
                               type="text"
                               placeholder={"Busca NHC o Teléfono"}
                            // onChange={(event) =>handleSearch(event)}
                        />
                        <input className="btn"
                               type="submit"
                               value="Buscar"
                        />
                    </div>*/}