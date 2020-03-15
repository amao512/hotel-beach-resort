import { combineReducers, createStore, applyMiddleware } from "redux"
import roomsReducer from "./roomsReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    roomsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;