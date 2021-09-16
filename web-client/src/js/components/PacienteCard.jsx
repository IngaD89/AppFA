import React from "react";

import logo__section from "./assets/img/FA-APP-logo.svg";


export const PacienteCard = (props) => {


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
                        <div className="pacientes__alerts">
                            <p className="card__subTitle">Primera Llamada</p>
                            <p className="card__subTitle">Segunda Llamada</p>
                            <p className="card__subTitle">Tercera Llamada</p>
                            <p className="card__subTitle">Eco</p>
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


                {/*{props.pacientes.map(paciente => <Pacientes pacientes={paciente} key={props.pacientes.id} />)}*/
                }

            </section>
        </div>
    )
}
