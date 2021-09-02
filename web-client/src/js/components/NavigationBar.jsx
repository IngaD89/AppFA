import * as React from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import logo from './assets/img/FA-APP-logo.svg';
import {FaHome, FaUserMd, FaListAlt, FaBell, FaQuestionCircle, FaUsers} from 'react-icons/fa';


export const NavigationBar = () => {
    return (
        <Menu>
            <img className="logo" src={logo} alt={'LogoApp'} />
            <Link to={"/"}><FaHome className="icon"/>Inicio</Link>
            <Link to={"/login"}><FaUserMd className="icon"/>Login</Link>
            <Link to={"/altas"}><FaListAlt className="icon"/>Altas</Link>
            <Link to={"/pacientes"}><FaUsers className="icon"/>Pacientes</Link>
            <Link to={"/notificaciones"}><FaBell className="icon"/>Notificaciones</Link>
            <Link to={"/contacto"}><FaQuestionCircle className="icon"/>Contacto</Link>
            <p className="copy"><span>FA-APP © 2021. </span>All rights reserved.</p>
        </Menu>
    )
}