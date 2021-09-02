import * as React from "react";
import {useState} from "react";

import {useHistory} from "react-router-dom";




export const Altas = (props) => {

    let history = useHistory();


    const [datos, setDatos] = useState({
        nhc: '',
        telefono: '',
        consentimiento: '',
        primeraLlamada: '',
        segundaLlamada: '',
        terceraLlamada: '',
        pruebaEsfuerzo: '',
        eco: '',
        archivo: '',

    })

    const handleInputChange = (event) =>{
        setDatos ({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>

            <section>
                <h3>Alta Pacientes</h3>
                <form className="form__alta"
                      onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label>NHC</label>
                        <input id="nhc"
                               type="texto"
                               name="nhc"
                               placeholder="Número de Historia Clínica"
                               /*pattern=""
                               required*/
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Teléfono</label>
                        <input id="telefono"
                               type="texto"
                               name="telefono"
                               placeholder="+34 123456789"
                               pattern="(\+34|0034)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}"
                               required
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
                    <div className="input-wrapper">
                        <label>Primera Llamada</label>
                        <input id="primeraLlamada"
                               type="date"
                               name="primeraLlamada"
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Segunda Llamada</label>
                        <input id="segundaLlamada"
                               type="date"
                               name="segundaLlamada"
                               onChange={handleInputChange} />
                    </div>
                    <div className="input-wrapper">
                        <label>Tercera Llamada</label>
                        <input id="terceraLlamada"
                               type="date"
                               name="terceraLlamada"
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Prueba Esfuerzo</label>
                        <input id="pruebaEsfuerzo"
                               type="date"
                               name="pruebaEsfuerzo"
                               onChange={handleInputChange} />
                    </div>
                    <div className="input-wrapper">
                        <label>ECO</label>
                        <input id="eco"
                               type="date"
                               name="eco"
                               onChange={handleInputChange}/>
                    </div>
                    <div className="adjuntos-wrapper">
                        <h4>Archivos adjuntos</h4>
                        <div className="checkboxes-wrapper">
                            <label>adjuntar archivo</label>
                                <input
                                    id="archivo"
                                    name="archivo"
                                    type="text"
                                    onChange={handleInputChange}/>
                        </div>
                        <button className="btn__adjuntar">Adjuntar</button>

                    </div>

                    <div className="btn">
                        <h4>Adjuntar archivos</h4>
                        <div>
                            <input type="file"/>
                            <button className="btn__adjuntar">Adjuntar</button>
                        </div>
                    </div>

                    <div className="btn__submit">
                        <button onClick={()=> {history.push('/pacientes'); }   }

                                type="submit">Dar de Alta</button>
                    </div>

                </form>

            </section>
        </div>

    )
}