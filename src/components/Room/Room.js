import React from 'react';
import defaultImg from '../../assets/images/room-1.jpeg';
import { Link } from 'react-router-dom';
import s from './room.module.scss';

const Room = ({ room }) => {
    const {images, price, slug, name} = room;
    
    return (
        <article className={s.room}>
            <div className={s.imgContainer}>
                <img src={images[0].fields.file.url || defaultImg} alt="single room" />
                <div className={s.priceTop}>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className={'btn-primary ' + s.roomLink}>features</Link>
            </div>
            <p className={s.roomInfo}>{name}</p>
        </article>
    )
}

export default Room;