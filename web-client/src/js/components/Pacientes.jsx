import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";



export const Pacientes = (props) => {

    return (
        <div className="bk__image">
            <section>

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
                            <p className="paciente__ficha--text">{"Test Daño Miocardio: " + props.pacientes.miocardio}</p>
                            <p className="paciente__ficha--text">{"Consentimiento Informado: " + props.pacientes.consentimiento}</p>


                                {/*<p className="card__subTitle--details">{"id: " + props.pacientes.id}</p>
                                <p className="card__subTitle--details">NHC:</p>
                                <p className="card__subTitle--details">Teléfono:</p>
                                <p className="card__subTitle--details">Fecha de Registro:</p>
                                <p className="card__subTitle--details">Prueba de Esfuerzo:</p>
                                <p className="card__subTitle--details">Eco:</p>
                                <p className="card__subTitle--details">Test de Miocardio:</p>
                                <p className="card__subTitle--details">Consentimiento Informado:</p>*/}

                            {/*<div className="card__details--text">
                                <div className="card__text--details">{props.pacientes.id}</div>
                                <div className="card__text--details">{props.pacientes.nhc}</div>
                                <div className="card__text--details">{props.pacientes.telefono}</div>
                                <div className="card__text--details">{props.pacientes.fechaRegistro}</div>
                                <div className="card__text--details">{props.pacientes.pruebaEsfuerzo}</div>
                                <div className="card__text--details">{props.pacientes.eco}</div>
                                <div className="card__text--details">
                                    <FaCheckCircle className="icon__check"/>
                                    {props.pacientes.miocardio && "miocardio " }
                                </div>
                                <div className="card__text--details">
                                    <FaCheckCircle className="icon__check"/>
                                    {props.pacientes.consentimiento && "consentimiento" }
                                </div>
                            </div>*/}
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