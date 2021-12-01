import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
    const html = 100;
    const css = 100;
    const js = 85;
    const booststrap = 90;
    const react = 90;
    const node = 60;
    const mongo = 50;

    return (
        <div className="row m-3">
            <Bounce left cascade>
                <div className="col-md-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '40px', fontFamily: 'cursive' }}>My Skills</h3>
                        <p style={{ fontFamily: 'poppins Light' }}>These are some basic skills i have.I am working on my sills everyday to improve myself to beacome a full stack Web Developer.</p>
                    </div>
                </div>
            </Bounce>

            <Bounce right cascade>
                <div className="col-md-8">
                    <div style={{ fontFamily: 'poopins semibold' }}>
                        <div style={{ textAlign: 'start' }}><small>HTML</small></div>
                        <ProgressBar variant="success" now={html} label={`${html}%`} />
                        <div style={{ textAlign: 'start' }}><small>CSS</small></div>
                        <ProgressBar variant="info" now={css} label={`${css}%`} />
                        <div style={{ textAlign: 'start' }}><small>Java Script</small></div>
                        <ProgressBar variant="danger" now={js} label={`${js}%`} />
                        <div style={{ textAlign: 'start' }}><small>Bootstarp</small></div>
                        <ProgressBar variant="warning" now={booststrap} label={`${booststrap}%`} />
                        <div style={{ textAlign: 'start' }}><small>React</small></div>
                        <ProgressBar variant="success" now={react} label={`${react}%`} />
                        <div style={{ textAlign: 'start' }}><small>Node.js</small></div>
                        <ProgressBar variant="warning" now={node} label={`${node}%`} />
                        <div style={{ textAlign: 'start' }}><small>Mongo DB</small></div>
                        <ProgressBar variant="primary" now={mongo} label={`${mongo}%`} />
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default Skills;