import React from 'react';
import { connect } from 'react-redux';
import Room from '../Room/Room';
import s from './featuredRooms.module.scss';

const FeaturedRooms = props => {

    const featuredRooms = props.rooms.filter(room => room.fields.featured === true);
    const rooms = featuredRooms.map(room => (
        <Room key={room.sys.id} room={room.fields} />
    ))
    
    return (
        <div className={s.featuredRooms}>
            <div className={s.featuredRoomsCenter}>
                {rooms}
            </div>
        </div>
    )
}

const mstp = state => ({
    rooms: state.roomsReducer.rooms
})

export default connect(mstp)(FeaturedRooms);