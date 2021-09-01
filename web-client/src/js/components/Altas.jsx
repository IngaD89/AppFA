import * as React from "react";
import {Link} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";


export const Altas = () => {
    return (
        <div>
            <NavigationBar/>

            <section>
                <h3>Alta Pacientes</h3>
                <form className="form__alta">
                    <div className="classnumerohistoria">
                        <label>NHC</label>
                        <input
                            id="personas"
                            type="texto"
                            name="personas"
                        />
                    </div>
                    <div className="classtelefono">
                        <label>Teléfono</label>
                        <input
                            id="personas"
                            type="texto"
                            name="personas"
                        />
                    </div>
                    <div className="classprimerallamada">
                        <label>Primera llamada</label>
                        <input
                            id="fecha"
                            type="date"
                            name="fecha"
                        />
                    </div>
                    <div className="classsegunda llamada">
                        <label>Segunda llamada</label>
                        <input
                            id="fecha"
                            type="date"
                            name="fecha"
                        />
                    </div>

                    <div className="classtrecerallamada">
                        <label>Tercera llamada</label>
                        <input
                            id="fecha"
                            type="date"
                            name="fecha"
                        />
                    </div>

                    <div className="classpruebaesfuerzo">
                        <label>Prueba Esfuerzo</label>
                        <input
                            id="personas"
                            type="text"
                            name="personas"
                        />
                    </div>

                    <div className="classeco">
                        <label>ECO</label>
                        <input
                            id="personas"
                            type="text"
                            name="personas"
                        />
                    </div>
                    <div className="adjuntos">
                        <h4>Archivos adjuntos</h4>
                        <div className="checkboxes">
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                />
                                Estudio Daño Miocárdico
                            </label>
                        </div>
                        <div className="checkboxes">
                            <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                />
                                Consentimiento de Datos
                            </label>
                        </div>
                    </div>

                    <div>
                        <h4>Archivos</h4>
                        <div>
                            <input type="file" />
                            <button className="btn__adjuntar">Adjuntar archivo</button>
                        </div>
                    </div>

                    <div className="btn__submit" >
                        <button type="submit">Submit</button>
                    </div>

                </form>

            </section>
        </div>

    )
}