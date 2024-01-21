import React, { Component } from "react";
import "./ProjectPage.css";
import Logo from "../../component/Logo.jsx";

class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="d2 noise">
          <h1>Project Page</h1>
          <Logo />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
