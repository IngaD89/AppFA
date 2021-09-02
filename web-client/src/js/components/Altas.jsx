import * as React from "react";
import {useState} from "react";




export const Altas = (props) => {
    const [pacientes, setPacientes] = useState(        {
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
    return (
        <div>


            <section>
                <h3>Alta Pacientes</h3>
                <form className="form__alta">
                    <div className="input-wrapper">
                        <label>NHC</label>
                        <input id="nhc" type="texto" name="nhc"
                               placeholder="Número de Historia Clínica"
                               pattern=""
                               required />
                    </div>
                    <div className="input-wrapper">
                        <label>Teléfono</label>
                        <input id="phone" type="texto" name="phone"
                               placeholder="+34 123456789"
                               pattern="(\+34|0034)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}"
                               required />

                    </div>
                    <div className="input-wrapper">
                        <label>Primera Llamada</label>
                        <input id="primera" type="date" name="primera" />
                    </div>
                    <div className="input-wrapper">
                        <label>Segunda Llamada</label>
                        <input id="segunda" type="date" name="segunda" />
                    </div>
                    <div className="input-wrapper">
                        <label>Tercera Llamada</label>
                        <input id="tercera" type="date" name="tercera" />
                    </div>
                    <div className="input-wrapper">
                        <label>Prueba Esfuerzo</label>
                        <input id="prueba" type="date" name="prueba" />
                    </div>
                    <div className="input-wrapper">
                        <label>ECO</label>
                        <input id="eco" type="date" name="eco" />
                    </div>
                    <div className="adjuntos-wrapper">
                        <h4>Archivos adjuntos</h4>
                        <div className="checkboxes-wrapper">
                            <label>
                                <input name="edm" type="checkbox" />
                                Estudio Daño Miocárdico
                            </label>
                        </div>
                        <div className="checkboxes-wrapper">
                            <label>
                                <input name="cDatos" type="checkbox" />
                                Consentimiento de Datos
                            </label>
                        </div>
                    </div>

                    <div className="btn">
                        <h4>Adjuntar archivos</h4>
                        <div>
                            <input type="file" />
                            <button className="btn__adjuntar">Adjuntar</button>
                        </div>
                    </div>

                    <div className="btn__submit" >
                        <button type="submit">Dar de Alta</button>
                    </div>

                </form>

            </section>
        </div>

    )
}