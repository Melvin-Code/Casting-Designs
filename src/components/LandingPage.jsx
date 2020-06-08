import React, { Component } from 'react';

import LearnMore from './partials/LandingpageCom/LearnMore';

class LandingPage extends Component {
    render() {
        return (
            <div className='lan-page'>
               
               <LearnMore rendering={this.props.rendering} />
            </div>
        );
    }
}

export default LandingPage;