import React, { Component } from 'react';
import './ProjectPage.css'
import LogoAMLight from '../../media/logo-AM-light.png'


class ProjectPage extends Component {
    render() {
        return (
            <div className="project-page">
                <div className="d2 noise">
                    <img src={LogoAMLight} alt="" className="big-logo" />
                    <h1>Project Page</h1>
                </div>
            </div>
        );
    }
}

export default ProjectPage;