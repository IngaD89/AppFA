import * as React from 'react';
import {NavigationBar} from "./NavigationBar";


export const Inicio = () => {
    return (
        <div>
            <NavigationBar/>

            <section>
                <h3>Please Log In</h3>

                <div className="login-wrapper">
                    <form>
                        <label>
                            <p>Username</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password"/>
                        </label>
                        <p>Has olvidado tu contraseña?</p>


                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}