/* rafce */

import React from 'react';
import './Estilos.scss';
import logoTesys from '../img/logo.png';

const NavBar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-lg nav-index">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#"><img className="logoTesys" src={logoTesys} alt="logo-tesys"/></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0 contenido-menu">
                            <li className="nav-item dropdown sub-contenido-menu">
                                <a className="active menu-boot m-4" href="/#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS
                                </a>
                            </li>
                            <li className="nav-item dropdown sub-contenido-menu">
                                <a className="active menu-boot m-4" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">SERVICIOS     
                                </a>
                            </li>
                            <li className="nav-item dropdown sub-contenido-menu">
                                <a className="active menu-boot m-4" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">CONTACTO     
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default NavBar;
