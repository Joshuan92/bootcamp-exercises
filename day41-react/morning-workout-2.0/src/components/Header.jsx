import React from 'react';
import User from './Header/User.jsx'
import Navigation from './Header/Navigation.jsx'

export default class Header extends React.Component {
    render ()
    {

        return ( 
        
        <header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" class="logo"/>

            <User/>

            <Navigation/>
        
            
        </header>

        )
    }
}

