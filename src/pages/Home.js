import React from 'react';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';
import bannerImg from '../assets/images/room-2.jpeg';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <>
            <ScrollToTop>
                <Banner title='Luxurious rooms' 
                        subtitle='Deluxe rooms starting at $299'
                        img={bannerImg}
                >
                    <Link to='/rooms'>Our rooms</Link>
                </Banner>
                <Services />
                <FeaturedRooms />
            </ScrollToTop>
        </>
    )
}

export default Home;