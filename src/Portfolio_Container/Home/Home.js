import React from 'react';
import About from '../About_me/About';
import Contact from '../Contact_me/Contact';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;