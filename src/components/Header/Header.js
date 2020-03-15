import React from 'react';
import s from './header.module.scss';
import Links from './Links/Links';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink className={s.logo} to='/'>Beach Resort</NavLink>
            <Links />
        </header>
    )
}

export default Header;