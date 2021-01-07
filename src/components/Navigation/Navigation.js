import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return(
            <nav>
                <p onClick={ () => onRouteChange('signIn') } className='f3 _pa2 black underline link dim pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav>
                <p onClick={ () => onRouteChange('signIn') } className='f3 _pa2 black underline link dim pointer'>Sign In</p>
                <p onClick={ () => onRouteChange('register') } className='f3 _pa2 black underline link dim pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;