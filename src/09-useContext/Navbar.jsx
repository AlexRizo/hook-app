import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/home" className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` }>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` }>
                            about
                        </NavLink>

                        <NavLink to="/login" className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` }>
                            login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
};