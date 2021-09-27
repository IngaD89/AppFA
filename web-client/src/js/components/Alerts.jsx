import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";

import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";
import {useEffect} from "react";
import {AlertsApi} from "../apis/AlertsApi";


export const Alerts = (props) => {

    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        new AlertsApi().getAlerts().then(setRows)
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();


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
                                    <td>nhc</td>
                                    <td>Fecha</td>
                                </tr>
                                </thead>
                                <tbody>
                                {rows.map(alerta =>
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
                                // onSubmit={handleSubmit}
                            />
                        </div>

                    </div>


                </section>
            </div>
        )
    }


    {/*<div>{props.pacientes.nhc}</div>
<div>{props.pacientes.fechaRegistro}</div>*/
    }
}

