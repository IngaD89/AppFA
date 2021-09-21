import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";
import {FaCheckCircle} from "react-icons/fa";



export const Pacientes = (props) => {
    return (
        <div>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <h2 className="card__title">Pacientes</h2>

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

                    <div className="card__wrapper">
                        <h3 className="card__title">Ficha Paciente</h3>
                        <div className="card__details">
                            <div className="card__details--titles">
                                <p className="card__subTitle--details">ID:</p>
                                <p className="card__subTitle--details">NHC:</p>
                                <p className="card__subTitle--details">Teléfono:</p>
                                <p className="card__subTitle--details">Fecha de Registro:</p>
                                <p className="card__subTitle--details">Prueba de Esfuerzo:</p>
                                <p className="card__subTitle--details">Eco:</p>
                                <p className="card__subTitle--details">Test de Miocardio:</p>
                                <p className="card__subTitle--details">Consentimiento Informado:</p>
                            </div>
                            <div className="card__details--text">
                                <div className="card__text--details">{props.pacientes.id}</div>
                                <div className="card__text--details">{props.pacientes.nhc}</div>
                                <div className="card__text--details">{props.pacientes.telefono}</div>
                                <div className="card__text--details">{props.pacientes.fechaRegistro}</div>
                                <div className="card__text--details">{props.pacientes.pruebaEsfuerzo}</div>
                                <div className="card__text--details">{props.pacientes.eco}</div>
                                <div className="card__text--details">
                                    <FaCheckCircle className="icon__check"/>
                                    {/*{props.pacientes.miocardio && "miocardio" }*/}
                                </div>
                                <div className="card__text--details">
                                    <FaCheckCircle className="icon__check"/>
                                    {/*{props.pacientes.consentimiento && "consentimiento" }*/}
                                </div>
                            </div>
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
