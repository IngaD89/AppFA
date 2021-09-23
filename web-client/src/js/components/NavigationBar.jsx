import * as React from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import logo from './assets/img/FA-APP-logo.svg';
import {FaHome, FaUser, FaListAlt, FaBell, FaQuestionCircle, FaSignOutAlt} from 'react-icons/fa';



export const NavigationBar = (props) => {

    return (
        <Menu>
            <div className="logo__wrapper">
                <img className="logo" src={logo} alt={'FA-APP logo'} />
            </div>
            <Link className="list__item" to={"/"}><FaHome className="icon"/>Inicio</Link>
            <Link className="list__item" to={"/"}><FaSignOutAlt className="icon"/>Logout</Link>
            <Link className="list__item" to={"/altas"}><FaListAlt className="icon"/>Altas</Link>
            <Link className="list__item" to={"/pacientes"}><FaUser className="icon"/>Pacientes</Link>
            <Link className="list__item" to={"/alerts"}><FaBell className="icon"/>Alertas</Link>
            <Link className="list__item" to={"/contacto"}><FaQuestionCircle className="icon" />Contacto</Link>
            <div className="footer">
                <p className="copy"><span>FA-APP © 2021. </span>All rights reserved.</p>
            </div>
        </Menu>
    )
}