import React, { Component } from 'react';
import Form from './partials/Form';

class Contact extends Component {
    render() {
        return (
            <div className= 'contact-box'>
            <div className="form-text-box">
                <h2 className="form-text-main">Contact me</h2>
                <p className='form-text-sub'>Want to get in touch to know the wonderful things we can do toguether. Well fill up this form or email me directly to casting-desings@gmail.com</p>
                <Form/>
                </div>
                <div className='social-box'>
                <h2 className='social-main'>Want to get social</h2>
                <p className='social-sub'>Hit me up are linkedIn or check my code at GitHub</p>
                </div>
            </div>
        );
    }
}

export default Contact;