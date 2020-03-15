import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoomsThunk } from './redux/roomsReducer';
import Error from './pages/Error';

const Home = lazy(() => import('./pages/Home'));
const Rooms = lazy(() => import('./pages/Rooms'));
const SingleRoom = lazy(() => import('./pages/SingleRoom'));


const App = ({ rooms, getRoomsThunk }) => {

    useEffect(() => {
        getRoomsThunk()
    }, [rooms])

    return (
        <div className="App">
            <Header />

            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' render={() => <Home />}/>
                    <Route exact path='/rooms' render={() => <Rooms />}/>

                    {rooms.map(room => (
                        <Route exact
                               key={room.sys.id} 
                               path={'/rooms/' + room.fields.slug} 
                               render={() => <SingleRoom room={room.fields}/>}
                        />
                    ))}

                    <Route render={() => <Error/>}/>
                </Switch>
            </Suspense>

            <Footer />
        </div>
    );
}

const mstp = state => ({
    rooms: state.roomsReducer.rooms
})


export default connect(mstp, { getRoomsThunk })(App);
