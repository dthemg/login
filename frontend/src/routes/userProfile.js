import React from 'react';
import { withRouter } from 'react-router-dom';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", userId: "" };
    this.getProfileInfo();
  }

  getProfileInfo() {
    console.log("GETTING SESSION PROFILE");
    fetch("http://localhost:9000/profile",
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then(res => res.text())
    .then(res => console.log(res));
  }

  renderNoProfile() {
    return (
      <div>
        <h3>Select a profile to continue</h3>
      </div>
    )
  }

  renderProfile(userId) {
    return (
      <div>
        <h3>Profile for ID: {userId}</h3>
      </div>  
    )
  }

  render() {
    return this.renderNoProfile();
  }
}

export default withRouter(UserProfile);