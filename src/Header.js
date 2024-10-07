import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="hd1">
        <div className="hd1_c1">
          <div>
            <p className="boldText">{this.props.personInfo.name}</p>
            <p>{this.props.personInfo.occupation}</p>
          </div>
        </div>
        <div className="hd1_c2">
          <div>
            <p className="smallText">Email: {this.props.contactInfo.email} <br></br> Web: {this.props.contactInfo.web} <br></br> Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;