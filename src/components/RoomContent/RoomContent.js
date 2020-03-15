import React from 'react';
import s from './roomContent.module.scss';

const RoomContent = props => {
    const { price, size, capacity, pets, breakfast, description, extras, images } = props;
    
    return (
        <div className={s.roomContent}>
            <section className={s.images}>
                {images.map((image, index) => (
                    <img key={index} src={image.fields.file.url} alt='room'/>
                ))}
            </section>

            <section className={s.roomInfo}>
                <article className={s.desc}>
                    <h3>details</h3>
                    <p>{description.content[0].content[0].value}</p>
                </article>
                <article className={s.info}>
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                        max capacity :
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                    </h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                </article>
            </section>

            <section className={s.roomExtras}>
                <h6>extras </h6>
                <ul className={s.extras}>
                    {extras.map((item, index) => (
                    <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default RoomContent;