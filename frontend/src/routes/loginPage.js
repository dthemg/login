import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "username": "", 
      "password": ""
    }
    this.onLoginAttempt = this.onLoginAttempt.bind(this);
    this.renderLoginFields = this.renderLoginFields.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onLoginAttempt() {
    console.log("Attempting to log in...")
    console.log("Username", this.state.username);
    console.log("Password", this.state.password);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderLoginFields() {
    return (
      <div>
        <div>
            <TextField
              label="Username"
              name="username"
              value={ this.state.username }
              onChange={ this.onChange }
            >
            </TextField>
        </div>
        <div>
            <TextField
              label="Password"
              name="password"
              value={ this.state.password }
              onChange={ this.onChange }
              >
              </TextField>
        </div>
        <div>
          <Button
            onClick={ this.onLoginAttempt }
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        { this.renderLoginFields() }
      </div>
    )
  }
}

export default LoginPage;