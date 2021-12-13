/* rafce */

import React from 'react';
import { Link } from 'react-router-dom';
import ItemCategoryContainer from '../ItemListContainer/ItemCategoryContainer';
import CardWidget from './CardWidget';
import './NavBar.scss';

const NavBar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-lg nav-index">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        <img className="logoTesys" src={'./img/logo.png'} alt="logo-tesys" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <Link className="active menu-boot m-4" to={'/'}>
                                    CATEGORIAS
                                </Link>
                                <ul className="dropdown-menu submenu-boot p-3" aria-labelledby="navbarDropdown">
                                    <ItemCategoryContainer />
                                </ul>
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
                    <CardWidget />
                </div>
            </nav>
        </main>
    )
}

export default NavBar;
