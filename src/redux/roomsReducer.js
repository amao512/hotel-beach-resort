import { getAPI } from '../api/api';

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

const getRooms = rooms => ({ type: GET_ROOMS, rooms });

export const getData = () => async dispatch => {
    await getAPI().then(response => {
        console.log(response.items)
        dispatch(getRooms(response.items))
    })
}

export default roomsReducer;
