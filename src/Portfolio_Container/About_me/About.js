import React from 'react';
import './About.css';
import intro from '../../assets/images/pic-1.jpg';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className='about'>
            <Fade left cascade>
                <div className="about_left">
                    <div className="about_card bg">

                    </div>
                    <div className="about_card">
                        <img className='about_img' src={intro} alt="about" />
                    </div>
                </div>
            </Fade>
            <Fade right cascade>
                <div className="about_right">
                    <h1 className="about_title" style={{ fontSize: '40px', fontFamily: 'cursive' }}>About Me</h1>
                    <p className="about_sub">
                        I am a full stack web developer with more than 3000 hours of building,maintaining & deployinf single page applications
                    </p>
                    <p className="about_desc">
                        I have a solid background about web developement.I have a bachelor degree in Computer Science.I can adapt on any technology eapidly making myself flexible upon any developement.A passionate,diligent person who wants to learn continuously
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default About;