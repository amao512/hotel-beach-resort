import React from 'react';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import AllRooms from '../components/AllRooms/AllRooms';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Rooms = () => {
    return (
        <>
            <ScrollToTop>
                <Banner title='our rooms'>
                    <Link to='/'>return home</Link>
                </Banner>
                <AllRooms />
            </ScrollToTop>
        </>
    )
}

export default Rooms;