import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import Mailto from 'react-protected-mailto';


export const Contacto = () => {
    return (
        <div>
            <NavigationBar/>

            <section>
                <h1>Contáctanos</h1>
                <p>
                    Phone: <Mailto tel='+34-123456789'/><br/>
                    Email: <Mailto
                    email='contacto@fa-app.com'
                    headers={
                        {subject: 'Solicitud de contacto desde FA-APP'}
                    }/>
                </p>
            </section>
        </div>
    )
}
