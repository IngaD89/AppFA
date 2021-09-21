import * as React from "react";
import {useState} from "react";
import {PacientesApi} from "../apis/PacientesApi";
import {Redirect} from "react-router-dom"
import logo__section from "./assets/img/FA-APP-logo.svg";


export const Altas = (props) => {


    const [datos, setDatos] = useState({
        nhc: '',
        telefono: '',
        fechaRegistro: '',
        pruebaEsfuerzo: '',
        eco: '',
        miocardio: '',
        consentimiento: '',
        archivo: ''
})

    const [enviado, setEnviado] = useState(false)


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const handleDateChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value + "T00:00:00"
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const api = new PacientesApi()

        api.savePaciente(datos)
            .then(() => setEnviado(true))
            .then(props.cuandoTermines)


    }


    return (enviado ? <Redirect to="/pacientes"/> :
            <div>

                <section>
                    <img className="logo__section" src={logo__section} alt={'LogoApp'}/>
                    <form className="form__alta" onSubmit={handleSubmit}>
                        <h2 className="form__inicio--title">Alta Pacientes</h2>
                        <div className="input__wrapper">
                            <label>NHC</label>
                            <input id="nhc"
                                   type="text"
                                   name="nhc"
                                   placeholder="Número de Historia Clínica"
                                   onChange={handleInputChange}
                            />
                        </div>
                        <div className="input__wrapper">
                            <label>Teléfono</label>
                            <input id="telefono"
                                   type="text"
                                   name="telefono"
                                   placeholder="+34 123456789"

                                /* pattern="(\+34|0034)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}"
                                 required*/
                                   onChange={handleInputChange}/>

                        </div>
                        <div className="input__wrapper">
                            <label>Fecha de registro</label>
                            <input id="fechaRegistro"
                                   type="datetime-local"
                                   name="fechaRegistro"
                                   onChange={handleDateChange}/>
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
                                       id="miocardio"
                                       name="miocardio"
                                       type="checkbox"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="checkbox__wrapper">
                                <label className="checkbox__label">Consentimiento Informado</label>
                                <input className="checkbox__input"
                                       id="consentimiento"
                                       name="consentimiento"
                                       type="checkbox"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="add__files--wrapper">
                                <label>Archivos</label>
                                <input className="add__files--input"
                                       id="archivos"
                                       name="archivos"
                                       type="file"
                                       onChange={handleInputChange}/>
                            </div>
                        </div>


                        <div className="buttons__wrapper">
                            <input className="btn"
                                   type="submit"
                                   value="Dar de Alta"
                            />

                        </div>

                    </form>

                </section>
            </div>

    )
}