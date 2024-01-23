import React, { Component } from "react";
import "./ProjectPage.css";
import Logo from "../../component/Logos/Logo.jsx";
import LogoLine from "../../component/Logos/LogoLine.jsx";

class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="d2 noise">
          <h1>Project Page</h1>
          {/* <Logo /> */}
          <LogoLine />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
