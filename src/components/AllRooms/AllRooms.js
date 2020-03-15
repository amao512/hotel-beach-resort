import React from 'react';
import Room from '../Room/Room';
import { connect } from 'react-redux';
import s from './allRooms.module.scss';

const AllRooms = ({ rooms }) => {
    if (rooms.length === 0) {
        return (
          <div className="empty-search">
            <h3>unfortunately no rooms matched your search parameters</h3>
          </div>
        );
      }
    return (
        <div className={s.allRooms}>
            <div className={s.allRoomsCenter}>
                {rooms.map(room => (
                    <Room key={room.sys.id} room={room.fields}/>
                ))}
            </div>
        </div>
    )
}

const mstp = state => ({
    rooms: state.roomsReducer.rooms
})

export default connect(mstp)(AllRooms);