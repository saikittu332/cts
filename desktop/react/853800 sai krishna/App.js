import React, { Component } from "react";
import Movies from "./component/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/home";
import PageNotFound from "./component/page-not-found";
import MovieDetails from "./component/movie-details";
import NavBar from "./component/navbar";
import Login from "./component/login";
import Register from "./component/registration";
import Employees from "./component/employees";
import Posts from "./component/posts";
import Logout from "./component/logout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import EmployeeForm from "./component/employee-form";

class App extends Component {
  // return <button onClick={methodDoesNotExist}>Break the world</button>;

  state = {
    isLoggedIn: false //to remove logout/login option when we are in login/logout page
  };
  setLogin = status => {
    this.setState({ isLoggedIn: status });
  };
  render() {
    return (
      <div>
        <ToastContainer />

        <NavBar isLoggedIn={this.state.isLoggedIn} setLogin={this.setLogin} />
        <Switch>
          {/*without using exact  use switch*/}
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id?" component={MovieDetails} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/home" to="/" />
          <Route path="/" exact component={Home} />

          {/* <Route path="/login" component={Login} /> */}
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
          {this.state.isLoggedIn ? (
            <Route path="/employees" component={Employees} />
          ) : (
            <Redirect to="/" />
          )}
          {/* <Route path="/employee-form" component={EmployeeForm} /> */}
          <Route path="/posts" component={Posts} />

          {/* <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/" /> */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
