import React from 'react';
import { withRouter } from 'react-router-dom';


class UserProfile extends React.Component {
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
    let params = this.props.match.params;
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      return this.renderNoProfile()
    } else {
      return this.renderProfile(params.userId);
    }
  }
}

export default withRouter(UserProfile);