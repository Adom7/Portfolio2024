import React from 'react';
import './LoadingAnimation.css'

import LogoAlone from '../../component/Logos/Logo.jsx'


const LoadingAnimation = ({
    logo
  }) => {
    return (
        <div className="loading-screen">
            <div className="loading-screen-background noise">
            </div>
            <div className="loading-logo">
                <LogoAlone />
            </div>
        </div>
    );
  }

export default LoadingAnimation;