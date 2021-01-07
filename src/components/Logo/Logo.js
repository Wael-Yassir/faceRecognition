import React from 'react';
import Tilt from 'react-tilt'
import logo from './brain.png';
import './Logo.css';
import { render } from '@testing-library/react';

const Logo = () =>  {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br3 shadow-2" options={{ max : 55 }}>
                 <div className="Tilt-inner"> 
                    <img src = {logo} alt = 'brain'/>   
                 </div>
            </Tilt>
        </div>
    );
}

export default Logo;