import * as React from 'react';
import Mailto from 'react-protected-mailto';
import logo__section from "./assets/img/FA-APP-logo.svg";
import background from "./assets/img/hClinic.jpg";


export const Contacto = () => {
    return (
        <div className="bk__image"
             style={{ backgroundImage: `url(${background})` }}>
            <section>
                <img className="logo__section" src={logo__section} alt={'LogoApp'} />

                <div className="contacto__wrapper">
                    <h2 className="form__inicio--title">Contacto</h2>
                    <p className="contacto__text">Teléfono</p>
                    <Mailto className="contacto__link"
                            tel='+34-123456789'/>
                    <p className="contacto__text">Email</p>
                    <Mailto className="contacto__link"
                            email='contacto@fa-app.com'
                            headers={{subject: 'Solicitud de contacto desde FA-APP'}} />
                </div>
            </section>
        </div>
    )
}
