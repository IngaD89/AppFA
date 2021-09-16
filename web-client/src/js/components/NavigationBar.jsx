import * as React from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import logo from './assets/img/FA-APP-logo.svg';
import {FaHome, FaUserPlus, FaListAlt, FaBell, FaQuestionCircle} from 'react-icons/fa';


export const NavigationBar = () => {
    return (
        <Menu>
            <div className="logo__wrapper">
                <img className="logo" src={logo} alt={'LogoApp'} />
            </div>
            <Link className="list__item" to={"/"}><FaHome className="icon"/>Inicio</Link>
            <Link className="list__item" to={"/login"}><FaUserPlus className="icon"/>Login</Link>
            <Link className="list__item" to={"/altas"}><FaListAlt className="icon"/>Altas</Link>
            <Link className="list__item" to={"/pacientes"}><FaUserPlus className="icon"/>Pacientes</Link>
            <Link className="list__item" to={"/notificaciones"}><FaBell className="icon"/>Notificaciones</Link>
            <Link className="list__item" to={"/contacto"}><FaQuestionCircle className="icon" />Contacto</Link>
            <div className="footer">
                <p className="copy"><span>FA-APP © 2021. </span>All rights reserved.</p>
            </div>
        </Menu>
    )
}