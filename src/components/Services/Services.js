import React from 'react';
import { v4 } from 'uuid';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import s from './services.module.scss';
import Title from '../Title/Title';

const Services = () => {

    const services = [
        {
            id: v4(),
            icon: <FaCocktail />,
            title: 'Free Cocktails',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
            id: v4(),
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
            id: v4(),
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
        {
            id: v4(),
            icon: <FaBeer />,
            title: 'Strongest Beer',
            info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
        },
    ]

    return (
        <div className={s.services}>
            <Title title='services'/>
            
            <div className={s.servicesCenter}>
                {services.map(service => (
                    <article key={service.id} className={s.service}>
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Services;