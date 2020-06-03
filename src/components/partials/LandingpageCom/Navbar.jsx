import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className= 'navbar'>
                <div className= 'navbar-box'>
                <Link className='link'  to='/About'>About</Link>
                <Link className='link'to='/Contact'>Contact</Link>
                <Link className='link'to='/MyWork'>My Work</Link>
                
                </div>
            </nav>
        );
    }
}

export default NavBar;