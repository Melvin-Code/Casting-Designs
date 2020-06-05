import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlyingLogo from './FlyingLogo';

class NavBar extends Component {
    render() {
        return (
            <nav className= 'navbar'>
            <FlyingLogo/>
                <div className= 'navbar-box'>
                <Link className='link'  to='/About'>About</Link>
                <Link className='link'to='/Contact'>Contact</Link>
                <Link className='link'to='/Work'>Work</Link>
                
                </div>
            </nav>
        );
    }
}

export default NavBar;