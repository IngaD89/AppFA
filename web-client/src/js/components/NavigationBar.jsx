import * as React from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import logo from './assets/img/FA-APP-logo.svg';
import {FaHome, FaUser, FaListAlt, FaBell, FaQuestionCircle} from 'react-icons/fa';


export const NavigationBar = () => {
    return (
        <Menu>
            <img className="logo" src={logo} alt={'LogoApp'} />
            <Link to={"/"}><FaHome className="icon"/>Home</Link>
            <Link to={"/login"}><FaUser />Login</Link>
            <Link to={"/altas"}><FaListAlt />Altas</Link>
            <Link to={"/pacientes"}><FaListAlt />Pacientes</Link>
            <Link to={"/notificaciones"}><FaBell />Notificaciones</Link>
            <Link to={"/contacto"}><FaQuestionCircle />Contacto</Link>
            <p className="copy"><span>FA-APP © 2021. </span>All rights reserved.</p>
        </Menu>
    )
}