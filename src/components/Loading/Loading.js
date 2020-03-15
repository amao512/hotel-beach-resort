import React from 'react';
import loading from '../../assets/images/gif/loading.gif';
import s from './loading.module.scss';

const Loading = () => {
    return (
        <div className={s.loading}>
            <img src={loading} alt='loading'/>
        </div>
    )
}

export default Loading;