import React, { Component } from 'react';
import image404 from '../../media/404.png'
import './NoPage.css'

class NoPage extends Component {
    render() {
        return (
            <div className='no-page'>
                <img src={image404} alt="" />
                <h1>404 Not Found</h1>
            </div>
        );
    }
}

export default NoPage;