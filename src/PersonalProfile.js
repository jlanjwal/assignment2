import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
        <div className="profileContainer">
            <div className="sectionHeader">{this.props.personalProfile.sectionHeader}</div>
            <div className="bodydiv">
                <div className="text">{this.props.personalProfile.description}
                </div>
            </div>
        </div>
    );
  }
}

export default PersonalProfile;