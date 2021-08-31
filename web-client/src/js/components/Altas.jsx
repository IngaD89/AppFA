import * as React from "react";
import {Link} from "react-router-dom";

export const Altas = () => {
    return (

                <form className="formulario">
                    <div className="classnumerohistoria">
                        <label>NHC</label>
                        <input
                            id="personas"
                            type="texto"
                            name="personas"
                        />
                    </div>
                    <div className="classtelefono">
                        <label>Telefono</label>
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

                    <div className="actividad">
                    <div>
                        <button className="boton" >
                            <Link className="textoboton" to={"./Altas"}>DAR DE ALTA</Link>
                        </button>
                    </div>
                    </div>
                </form>
    )
}