import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';
import Bounce from 'react-reveal/Bounce';


const Projects = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className='projects '>
            <Bounce top cascade>
                <div className="projet_texts">
                    <h1 className="title">Designed & Developed</h1>
                    <p className="desc">
                        I am a creative & passonate Developer.These are some of my projects that i developed recently.Click on the images to see the live preview.
                    </p>
                </div>
            </Bounce>
            <div className="project_list">
                {
                    datas.map(data => <Project
                        key={data.id}
                        img1={data.img1}
                        live={data.live}
                    ></Project>)
                }

            </div>
        </div>
    );
};

export default Projects;