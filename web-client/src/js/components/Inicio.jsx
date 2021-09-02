import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Link} from "react-router-dom";



export const Inicio = () => {
    return (
        <div>
            <NavigationBar/>

            <section>
                <h3>Iniciar sesión</h3>

                <div className="login-wrapper">
                    <form>
                        <label>
                            <p>Usuario</p>
                            <input type="text"
                                   placeholder="Nombre de usuario o email"
                                   pattern=""
                                   required />
                        </label>
                        <label>
                            <p>Contraseña</p>
                            <input type="password"
                                   placeholder="Contraseña"
                                   pattern=""
                                   required />
                        </label>
                        <div>
                            <Link to={"/contacto"}>Has olvidado tu contraseña?</Link>
                        </div>
                            <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}