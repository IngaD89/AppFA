import * as React from 'react';
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";
import {useEffect, useState} from "react";
import {AlertsApi} from "../apis/AlertsApi";


export const Alerts = () => {

    const [alertas, setAlertas] = useState([]);

    useEffect(() => {
        new AlertsApi().getAlerts().then(setAlertas)
    }, [])


        return (
            <div className="bk__image"
                 style={{backgroundImage: `url(${background})`}}>
                <section>
                    <img className="logo__section" src={logo__section} alt={'LogoApp'}/>

                    <div className="pacientes__wrapper">
                        <h2 className="alertas__title">Alertas</h2>

                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <td>NHC</td>
                                    <td>Fecha</td>
                                </tr>
                                </thead>
                                <tbody>
                                {alertas.map(alerta =>
                                    <tr>
                                        <td>{alerta.nhc}</td>
                                        <td>{alerta.dateTime}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>

                        <div className="buttons__wrapper">
                            <input className="btn"
                                   type="submit"
                                   value="Guardar"
                            />
                        </div>

                    </div>


                </section>
            </div>
        )

}

