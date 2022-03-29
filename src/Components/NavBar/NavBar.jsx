import React from 'react';
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';
import './NavBar.scss';
import { BiCalendar } from "react-icons/bi";
import { GiPresent } from "react-icons/gi";

const NavBar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light nav-index">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        <h3 className='logoWedding'>#FLU&MIYO</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <Link className="active menu-boot" to={'/regalos'}>
                                <div className='icon-calendar'>
                                    <GiPresent />
                                </div>
                                <p className='info'>REGALOS</p>
                            </Link>

                            <Link className="active menu-boot" to={'/infoEvento'}>
                                <div className='icon-calendar'>
                                    <BiCalendar />
                                </div>
                                <p className='info'>INFO DE EVENTOS</p>
                            </Link>
                            <CardWidget />
                        </ul>
                    </div>

                </div>
            </nav>
        </main>
    )
}

export default NavBar;
