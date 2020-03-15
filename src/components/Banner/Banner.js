import React from 'react';
import StyledHero from '../StyledHero/StyledHero';
import s from './banner.module.scss';

const Banner = ({ children, title, subtitle, img }) => {
    return (
        <StyledHero img={img}>
            <div className={s.banner}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className={s.link}>
                    {children}
                </div>
            </div>
        </StyledHero>
    )
}

export default Banner;