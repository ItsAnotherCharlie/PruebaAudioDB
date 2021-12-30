import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './Navegacion.css'
import 'animate.css';

const Navegacion = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false);

    let menu
    let menuBG

    if(mostrarMenu) {
        menu = <div 
                className="menudiv animate__animated animate__slideInLeft"
                onClick={() => setMostrarMenu(true)}
            >
            <nav className="navmenu">
                <Link className="linkmenu" to="/">HISTORIA</Link>
                <Link className="linkmenu" to="/discografia">DISCOGRAFÍA</Link>
            </nav>
        </div>

        menuBG = <div 
                className="menubg"
                onClick={() => setMostrarMenu(false)}
            ></div>
    }

    return (
        <nav>
            <span>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setMostrarMenu(!mostrarMenu)}
                />
            </span>

            {menuBG}
            {menu}
        </nav>
    )
}

export default Navegacion
