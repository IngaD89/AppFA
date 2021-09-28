import * as React from 'react';
import {useEffect, useState} from "react";
import {AlertsApi} from "../apis/AlertsApi";
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic.jpg";

export const Alerts = () => {

    const [alertas, setAlertas] = useState([]);

    useEffect(() => {
        new AlertsApi().getAlerts().then(setAlertas)
    }, [])


    return (
        <div className="bk__image"
             style={{backgroundImage: `url(${background})`}}>
            <section>
                <img className="logo__section" src={logo__section} alt={'FA-APP'}/>
                <div className="alertas__wrapper">
                    <h2>Alertas</h2>
                    <table className="alertas__tabla">
                        <thead className="alertas__tabla--titleWrap">
                        <tr>
                            <td className="alertas__tabla--title">NHC</td>
                            <td className="alertas__tabla--title">Fecha</td>
                        </tr>
                        </thead>
                        <tbody>
                        {alertas.map(alerta =>
                            <tr>
                                <td className="alertas__tabla--text">{alerta.nhc}</td>
                                <td className="alertas__tabla--text">{alerta.dateTime}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

