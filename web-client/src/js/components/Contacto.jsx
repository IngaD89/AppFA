import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import Mailto from 'react-protected-mailto';



export const Contacto = () => {
        return (
            <div>
                    <NavigationBar />

                    <section>
                            <h1>Page with no content yet</h1>
                        <Mailto email="j@sonbellamy.com" obfuscate={true}>
                            Email me!
                        </Mailto>
                    </section>
            </div>
        )
}
