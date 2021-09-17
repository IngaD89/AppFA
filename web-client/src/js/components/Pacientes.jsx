import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";



export const Pacientes = (props) => {
    return (
        <div>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                <div className="pacientes__wrapper">
                    <h2 className="card__title">Pacientes</h2>

                    <div className="pacientes__searchBar">
                        <input className="btn"
                               type="text"
                               placeholder={"Busca NHC o Teléfono"}
                            // onChange={(event) =>handleSearch(event)}
                        />
                        <input className="btn"
                               type="submit"
                               value="Buscar"
                        />
                    </div>

                    <h2 className="card__title">Ficha Paciente</h2>
                    <div className="card__wrapper">
                        <div className="card__details">
                            <div className="card__details--titles">
                                <p className="card__subTitle--details">Número de Historia Clínica:</p>
                                <p className="card__subTitle--details">Teléfono:</p>
                            </div>
                            <div className="card__details--text">
                                <p className="card__text--details">123456789</p>
                                <p className="card__text--details">+34123456789</p>
                            </div>
                        </div>

                        <div className="pacientes__files">
                            <p className="card__subTitle">Miocardio</p>
                            <p className="card__subTitle">Consentimiento</p>
                        </div>
                        <div className="buttons__wrapper">
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



                <div>{props.pacientes.nhc}</div>
                <div>{props.pacientes.telefono}</div>
                <div>{props.pacientes.fechaRegistro}</div>
                <div>{props.pacientes.pruebaEsfuerzo}</div>
                <div>{props.pacientes.eco}</div>
                <div>{props.pacientes.miocardio && "miocardio" }</div>
                <div>{props.pacientes.consentimiento && "consentimiento" }</div>
                <div>{props.pacientes.archivo}</div>
            </section>
        </div>
    )
}
