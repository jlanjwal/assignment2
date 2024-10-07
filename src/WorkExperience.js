import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
        <div className="workContainer">
            <p className="sectionHeader">{this.props.workExperience.sectionHeader}</p>
            <div className="bodydiv">
                <p className="boldText">{this.props.workExperience.jobTitle1}</p>
                <p className="text">{this.props.workExperience.jobDescription1}
                </p>
                <p className="boldText">{this.props.workExperience.jobTitle2}</p>
                <p className="text">{this.props.workExperience.jobDescription2}
                </p>
            </div>
        </div>
    );
  }
}

export default WorkExperience;