import * as React from "react";
import {useState} from "react";
import {PacientesApi} from "../apis/PacientesApi";
import {Redirect} from "react-router-dom"

export const Altas = (props) => {


    export const Altas = () => {

        const pacientesApi = new PacientesApi();

        const [submitted, setSubmitted] = useState(false)

        const savePacientes = () =>
            pacientesApi.savePacientes()
                .then(() => setSubmitted(true))


        const [datos, setDatos] = useState({
            nhc: '',
            telefono: '',
            primeraLlamada: '',
            segundaLlamada: '',
            terceraLlamada: '',
            pruebaEsfuerzo: '',
            eco: '',
            archivo: '',
            consentimiento: '',
        })

        const handleInputChange = (event) => {
            setDatos({
                ...datos,
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()

        }

        if (submitted) {
            return <Redirect to="/pacientes"/>
        }

        return (
            <div>

                <section>
                    <h2>Alta Pacientes</h2>
                    <form className="form__alta"
                          onSubmit={handleSubmit}>
                        <div className="input__wrapper">
                            <label>NHC</label>
                            <input id="nhc"
                                   type="text"
                                   name="nhc"
                                   placeholder="Número de Historia Clínica"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="input__wrapper">
                            <label>Teléfono</label>
                            <input id="tel"
                                   type="text"
                                   name="tel"
                                   placeholder="+34 123456789"

                                /* pattern="(\+34|0034)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}"
                                 required*/
                                   onChange={handleInputChange}/>

                        </div>
                        <div className="checkboxes-wrapper">
                            <label>Consentimiento de Datos</label>
                            <input
                                id="consentimiento"
                                name="consentimiento"
                                type="checkbox"
                                onChange={handleInputChange}/>
                        </div>

                        <div className="input__wrapper">
                            <label>Primera Llamada</label>
                            <input id="primeraLlamada"
                                   type="date"
                                   name="primeraLlamada"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="input__wrapper">
                            <label>Segunda Llamada</label>
                            <input id="segundaLlamada"
                                   type="date"
                                   name="segundaLlamada"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="input__wrapper">
                            <label>Tercera Llamada</label>
                            <input id="terceraLlamada"
                                   type="date"
                                   name="terceraLlamada"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="input__wrapper">
                            <label>Prueba Esfuerzo</label>
                            <input id="pruebaEsfuerzo"
                                   type="date"
                                   name="pruebaEsfuerzo"
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="input__wrapper">
                            <label>ECO</label>
                            <input id="eco"
                                   type="date"
                                   name="eco"
                                   onChange={handleInputChange}/>
                        </div>

                        <div className="checkboxes">
                            <div className="checkbox__wrapper">
                                <label className="checkbox__label">Test Daño Miocardio</label>
                                <input className="checkbox__input"
                                       id="consentimiento"
                                       name="consentimiento"
                                       type="checkbox"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="checkbox__wrapper">
                                <label className="checkbox__label">Consentimiento de Datos</label>
                                <input className="checkbox__input"
                                       id="consentimiento"
                                       name="consentimiento"
                                       type="checkbox"
                                       onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="add__files--wrapper">
                            <h3>Adjuntar archivos</h3>
                            <div>
                                <input className="add__files--input"
                                       type="file"/>
                                <button className="add__files--btn">Adjuntar</button>
                            </div>
                        </div>

                        <div className="btn__submit">
                            <input className="btn__submit--input"
                                   type="submit"
                                   value="Dar de Alta"
                                   onClick={() => {
                                       history.push('/pacientes');
                                   }}/>

                        </div>

                    </form>

                </section>
            </div>

        )
    }
}