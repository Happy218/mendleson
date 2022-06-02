import React from 'react';
import AboutUs from '../components/AboutUs';
import Communication from '../components/Communication';
import Navbar from '../components/navbar';
import OurClients from '../components/OurClients';
import OurTeam from '../components/OurTeam';
import Project from '../components/Project';
import Services from '../components/Services';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Communication/>
            <AboutUs/>
            <Services/>
            <OurTeam/>
            <Project/>
            <OurClients/>
        </div>
    );
}

export default Home;