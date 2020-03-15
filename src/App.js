import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from './redux/roomsReducer';
import Error from './pages/Error';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home'));
const Rooms = lazy(() => import('./pages/Rooms'));
const SingleRoom = lazy(() => import('./pages/SingleRoom'));


const App = ({ rooms, getData }) => {

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="App">
            <Header />

            <Suspense fallback={<Loading />}>
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

                <Footer />
            </Suspense>

        </div>
    );
}

const mstp = state => ({
    rooms: state.roomsReducer.rooms
})


export default connect(mstp, { getData })(App);
