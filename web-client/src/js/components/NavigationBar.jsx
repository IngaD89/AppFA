import * as React from "react";
import { slide as Menu } from 'react-burger-menu';




export const NavigationBar = () => {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="contact" className="menu-item--small" href="/contacto">Contacto</a>
        </Menu>
    )
}