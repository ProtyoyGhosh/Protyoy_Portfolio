import React from 'react';
import './Contact.css';
import phone from '../../assets/images/phone2.png';
import email from '../../assets/images/email2.png';
import map from '../../assets/images/map2.jpg';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';



const Contact = () => {
    const formRef = useRef();
    const handleSend = e => {
        console.log('clicked')
        e.preventDefault();
        emailjs.sendForm('service_19ravkn', 'template_1e76lwj', formRef.current, 'user_SBCQczfy3sddiOziKAT0U')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Thank you for your message')
    }
    return (
        <div className='contact'>
            <div className="contact_bg"></div>
            <div className="wrapper">
                <Slide left cascade>
                    <div className="left">
                        <h3 style={{ fontSize: '40px', fontFamily: 'cursive' }} className="contact_title">
                            Please contact me for more information
                        </h3>
                        <div className="contact_info">
                            <div className="contact_info_item">
                                <img src={phone} alt="" className="contact_icon" />
                                +88 01915441238
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="contact_info_item">
                                <img src={email} alt="" className="contact_icon" />
                                protyoy.official0615@gmail.com
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="contact_info_item">
                                <img src={map} alt="" className="contact_icon" />
                                72/2 BB Ghosh Lane,Kushtia,Bangladesh
                            </div>
                        </div>
                    </div>
                </Slide>
                <div className="right">

                    <p className="contact_desc">
                        <b style={{ color: 'orangered' }}>Get in touch.</b> Always available.Feel free to contact me for any project or developement.
                    </p>

                    <RubberBand>
                        <form ref={formRef} onSubmit={handleSend}>
                            <input type="text" placeholder='Name' name='user_name' /><br />
                            <input type="text" placeholder='Subject' name='user_subject' /><br />
                            <input type="text" placeholder='Email' name='user_email' /><br /><br />
                            <textarea rows='5' placeholder='Message me' name='message' /><br />
                            <button className='rounded-pill'>Send</button>
                        </form>
                    </RubberBand>
                </div>

            </div>
        </div>
    );
};

export default Contact;