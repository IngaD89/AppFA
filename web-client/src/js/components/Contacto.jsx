import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import Mailto from 'react-protected-mailto';


export const Contacto = () => {
    return (
        <div>
            <section>
                <h2>Contáctanos</h2>
                <div className="contacto__wrapper">
                    <p>Teléfono: <Mailto tel='+34-123456789'/>
                        Email: <Mailto email='contacto@fa-app.com' headers={{subject: 'Solicitud de contacto desde FA-APP'}} />
                    </p>
                </div>
            </section>
        </div>
    )
}
