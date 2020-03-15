import React from 'react';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <Banner title='404'
                    subtitle='page not found'
            >
                <Link to='/'>return home</Link>
            </Banner>
        </>
    )
}

export default Error;