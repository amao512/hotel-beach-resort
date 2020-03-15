import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './links.module.scss';
import { v4 } from 'uuid';

const Links = () => {

    const [links] = useState([
        {id: v4(), path: '/', name: 'Home'},
        {id: v4(), path: '/rooms', name: 'Rooms'},
    ])

    return (
        <ul className={s.navlink}>
            {links.map(link => (
                <li key={link.id}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Links;