import React from 'react';
import About from '../About_me/About';
import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;