import * as React from "react";
import {useState} from "react";
import {PacientesApi} from "../apis/PacientesApi";
import {Redirect} from "react-router-dom"
import logo__section from "./assets/img/FA-APP-logo.svg";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import background from "./assets/img/hClinic2.jpg";



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




    const handleSubmit = (event) => {
        event.preventDefault();

        const api = new PacientesApi()

        api.savePaciente(datos)
            .then(() => setEnviado(true))
            .then(props.cuandoTermines)


    }


    return (enviado ? <Redirect to="/pacientes"/> :
            <div className="bk__image"
                 style={{ backgroundImage: `url(${background})` }}>

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
                                   onChange={handleInputChange}/>

                        </div>
                        <div className="input__wrapper">
                            <label>Fecha de Registro</label>
                            <div className="input__date">
                                <DateTimePickerComponent
                                    id="fechaRegistro"
                                    type="date"
                                    name="fechaRegistro"
                                    onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="input__wrapper">
                            <label>Prueba Esfuerzo</label>
                            <div className="input__date">
                                <DateTimePickerComponent
                                    id="pruebaEsfuerzo"
                                    type="date"
                                    name="pruebaEsfuerzo"
                                    onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="input__wrapper">
                            <label>Eco</label>
                            <div className="input__date">
                                <DateTimePickerComponent
                                    id="eco"
                                    type="date"
                                    name="eco"
                                    onChange={handleInputChange}/>
                            </div>
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
                                       onChange={handleInputChange}
                                />
                            </div>
                            <div className="add__files--wrapper">
                                <label>Archivos</label>
                                <input className="add__files--input"
                                       id="archivos"
                                       name="archivos"
                                       type="file"
                                       onChange={handleInputChange}
                                />
                            </div>
                        </div>


                        <div className="buttons__wrapper">
                            <input className="btn"
                                   type="submit"
                                   value="Dar de Alta"
                                   onClick={handleSubmit}
                            />

                        </div>

                    </form>

                </section>
            </div>

    )
}