import React from 'react';
import './App.css';
import UserProfile from './routes/userProfile';
import AboutPage from './routes/aboutPage';
import CreateAccountPage from './routes/createAccountPage';
import {
  BrowserRouter,
  Route ,
  Link,
  Switch,
} from 'react-router-dom';
import LoginPage from './routes/loginPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "isLoggedIn": false,
      "userId": "",
    }
  }

  render() {
    return (
      <div>
        <h1>Demo Application</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/createAccount">
                  Create account
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          
          <Switch>
            <Route path={"/profile/:userId"}>
              <UserProfile />
            </Route>
            <Route path={"/profile"}>
              <UserProfile />
            </Route>
            <Route path={"/createAccount"}>
              <CreateAccountPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}


export default App;
