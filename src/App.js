import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      personalProfile: {
        sectionHeader: "Personal Profile",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExperience: {
        sectionHeader: "Work Experience",
        jobTitle1: "Job Title at Company (August 2022 December 2023)",
        jobDescription1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        jobTitle2: "Job Title 2 at Company (August 2020 December 2021)",
        jobDescription2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      skills: {
        sectionHeader: "Key Skills",
        skill: "A Key skill"
      },
      education: {
        sectionHeader: "Education",
        school1: "New Jersey Institute of Technology",
        degree1: "BS in Computer Science",
        year1: "2018-2022",
        gpa1: "GPA: 3.9",
        school2: "New Jersey Institute of Technology",
        degree2: "MS in Computer Science",
        year2: "2022-2023",
        gpa2: "GPA: 3.4"
      }
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <PersonalProfile personalProfile={this.state.personalProfile}></PersonalProfile>
        <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        <Skills skills={this.state.skills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}
export default App;