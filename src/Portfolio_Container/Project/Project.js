import React from 'react';
import './Project.css'


const Project = ({ img1, live }) => {
    return (
        <div className='sp'>
            <div className="sp_browser">
                <div className="sp_circle"></div>
                <div className="sp_circle"></div>
                <div className="sp_circle"></div>
            </div>
            <a href={live} target='_blank' rel='noreferrer'>
                <img src={img1} alt="" className='p_img' />
            </a>
        </div>

    );
};

export default Project;