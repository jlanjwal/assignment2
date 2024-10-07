import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
        <div className="skillsContainer">
            <div className="sectionHeader">{this.props.skills.sectionHeader}</div>
            <div className="skillSection">
                <p className="Text">{this.props.skills.skill}<br></br>{this.props.skills.skill}<br></br>{this.props.skills.skill}</p>
            </div>
            <div className="skillSection">
                <p className="Text">{this.props.skills.skill}<br></br>{this.props.skills.skill}<br></br>{this.props.skills.skill}</p>
            </div>
            <div className="skillSection">
                <p className="Text">{this.props.skills.skill}<br></br>{this.props.skills.skill}<br></br>{this.props.skills.skill}</p>
            </div>
            <div className="skillSection"></div>
        </div>
    );
  }
}

export default Skills;