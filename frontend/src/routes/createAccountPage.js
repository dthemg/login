import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: "",
      newPassword: "",
      newConfirmPassword: "",
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitNewAccount(event) {
    console.log("Creating account for: ");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>Create new account</h3>
        <div>
          <TextField
            onChange={ this.onChange }
            label="Username"
            name="newUsername"
          >
            Username
          </TextField>
        </div>
        <div>
          <TextField
            onChange={ this.onChange }
            label="Password"
            name="newPassword"
          >
            Password
          </TextField>
        </div>
        <div>
          <TextField
            onChange={ this.onChange }
            label="Confirm password"
            name="newConfirmPassword"
          >
            Confirm password
          </TextField>
        </div>
        <div>
          <Button
            onClick={ this.submitNewAccount }
            variant="contained"
            color="primary"
          >
            Create account
          </Button>
        </div>        
      </div>
    )
  }
}

export default CreateAccountPage;