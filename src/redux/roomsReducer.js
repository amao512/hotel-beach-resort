import data from '../data';

const GET_ROOMS = 'GET_ROOMS';

const initialState = {
    rooms: [],
}

const roomsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ROOMS:
            return {...state, rooms: action.rooms };
        default:
            return state;
    }
}

export const getRooms = rooms => ({ type: GET_ROOMS, rooms });

export const getRoomsThunk = () => async dispatch => {
    if(data){
        await dispatch(getRooms(data));
    }
}

export default roomsReducer;
