import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import RoomContent from '../components/RoomContent/RoomContent';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const SingleRoom = ({ room }) => {
    return (
        <>
            <ScrollToTop>
                <Banner title={`${room.name} room`} img={room.images[0].fields.file.url}>
                    <Link to="/rooms" className="btn-primary">
                    back to rooms
                    </Link>
                </Banner>
                <RoomContent {...room}/>
            </ScrollToTop>
        </>
    )
}


export default compose(withRouter)(SingleRoom);