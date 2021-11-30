import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile_container'>
            <div className="profile_parents">
                <div className='profile_details'>
                    <div className="profile_details_name">
                        <span className='primary_text'>
                            {""}
                            Hello,I'M <span className='highlighted_text'
                            >Protyoy</span>
                        </span>
                    </div>
                    <div className='profile_details_role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Web Developer', 1000,
                                        'Full Stack Developer', 1000,
                                        'MERN Developer', 1000,
                                        'React Developer', 1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile_tagline'>
                                Developing application with frontend & backend opperations
                            </span>
                        </span>
                    </div>
                    <div className='profile_options'>
                        <button className='primary_btn rounded-pill'>
                            Hire me
                        </button>
                        <a href='Protyoy_Web-Developer_Resume.pdf' download='Protyoy_Web-Developer_Resume'>
                            <button className=' highlited_btn rounded-pill'>Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile_picture'>
                    <div className="profile_picture_bacground"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;