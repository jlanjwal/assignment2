import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <div className="educationContainer">
            <p className="sectionHeader">{this.props.education.sectionHeader}</p>
            <div className="bodydiv">
                <div className="school">
                    <p className="boldText">{this.props.education.school1}</p>
                    <p className="Text">{this.props.education.degree1}<br></br>{this.props.education.year1}<br></br>{this.props.education.gpa1}</p>
                </div>
                <div className="school">
                    <p className="boldText">{this.props.education.school2}</p>
                    <p className="Text">{this.props.education.degree2}<br></br>{this.props.education.year2}<br></br>{this.props.education.gpa2}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Education;