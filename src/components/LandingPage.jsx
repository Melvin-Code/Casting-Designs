import React, { Component } from 'react';
import FlyingLogo from './partials/LandingpageCom/FlyingLogo';
import LearnMore from './partials/LandingpageCom/LearnMore';

class LandingPage extends Component {
    render() {
        return (
            <div className='lan-page'>
               <FlyingLogo/> 
               <LearnMore/>
            </div>
        );
    }
}

export default LandingPage;