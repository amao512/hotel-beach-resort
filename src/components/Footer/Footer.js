import React from 'react';
import { Link } from 'react-router-dom';
import s from './footer.module.scss'

const Footer = () => {
    return (
        <section className={s.footer}>
            <ul>
                <li><Link to='/faq'>FAQ's</Link></li>
                <li><Link to='/sitemap'>Sitemap</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </section>
    )
}

export default Footer;