import * as React from 'react';
import Mailto from "react-protected-mailto";
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic2.jpg";

export const Inicio = () => {

        return (
            <div className="bk__image"
                  style={{ backgroundImage: `url(${background})` }}>
                <section>
                    <img className="logo__section" src={logo__section} alt={'FA-APP'} />

                    <form className="form__inicio">
                        <h2 className="form__inicio--title">Iniciar sesión</h2>
                        <div className="input__wrapper">
                            <label>Usuario</label>
                            <input type="text"
                                   placeholder="Nombre de usuario o email"
                                   pattern=""/>
                        </div>
                        <div className="input__wrapper">
                            <label>Contraseña</label>
                            <input type="password"
                                   placeholder="Contraseña"/>
                        </div>
                        <div className="buttons__wrapper">
                            <input className="btn"
                                   type="submit"
                                   value="Iniciar Sesión"/>
                        </div>
                        <div className="forgot__wrapper">
                            <p className="forgot__text">Restablecer usuario o contraseña? </p>
                            <Mailto className="forgot__link"
                                    email='contacto@fa-app.com'
                                    headers={{subject: 'Restablecer usuario o contraseña'}}/>
                        </div>
                    </form>
                </section>
            </div>
        )
}