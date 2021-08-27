import * as React from "react";
import { slide as Menu } from 'react-burger-menu';
import logo from './assets/img/FA-APP-logo.svg';


export const NavigationBar = () => {
    return (
        <Menu>
            <img className="logo" src={logo} alt={'LogoApp'} />
            <a id="home" className="menu__item" href="/">Home</a>
            <a id="login" className="menu__item" href="/Login">Login</a>
            <a id="datos" className="menu__item" href="/Datos">Datos</a>
            <a id="notificaciones" className="menu__item" href="/Notificaciones">Notificaciones</a>
            <a id="contacto" className="menu__item--small" href="/Contacto">Contacto</a>
            <p class="copy">FA-APP © 2021. All rights reserved.</p>
        </Menu>
    )
}