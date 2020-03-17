import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/home";
import NavBar from "./component/navbar";
import Login from "./component/login";
import Register from "./component/registration";
import Logout from "./component/logout";
import ToDos from "./component/todos";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  setLogin = status => {
    this.setState({ isLoggedIn: status });
  };
  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} setLogin={this.setLogin} />
        <Switch>
          {/*without using exact  use switch*/}
          <Route path="/todos" component={ToDos} />

          <Route path="/logout" component={Logout} />
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={Home} />

          <Route
            path="/login"
            render={props => (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                setLogin={this.setLogin}
                {...props}
              />
            )}
          />

          <Route path="/register" component={Register} />
          {/* {this.state.isLoggedIn ? (
            <Route path="/employees" component={Employees} />
          ) : (
            <Redirect to="/" />
          )} */}
        </Switch>
      </div>
    );
  }
}

export default App;
