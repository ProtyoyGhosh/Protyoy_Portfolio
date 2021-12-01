import React from 'react';
import Flash from 'react-reveal/Flash';


const Footer = () => {
    return (
        <Flash>
            <div>
                <h3 style={{ fontSize: '18px', fontFamily: 'cursive', fontWeight: '600' }} className='mb-4'><span style={{ color: 'orangered' }}>Copyright</span>@2021 || All rights reserverd by <span style={{ color: 'orangered' }}>Protyoy</span></h3>
            </div>
        </Flash>
    );
};

export default Footer;