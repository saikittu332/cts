import React, { Component } from "react";
import Input from "./input";

class Login extends Component {
  username = React.createRef(); //reference object to map for input field

  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleFormSubmit = event => {
    event.preventDefault(); //for input type submit, not required for button
    const errors = {};
    const { username, password } = this.state.account;
    console.log(username);
    console.log(password);

    if (username.trim() === "") errors.username = "username is required";
    if (password.trim() === "") errors.password = "password is required";

    console.log(errors);
    this.setState({ errors });

    if (username == "sai" && password == "sai") {
      this.props.history.replace("/");
    } else {
      alert("invalid credentials");
    }
  };

  handleInputField = event => {
    const account = this.state.account;

    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    account[event.currentTarget.name] = event.currentTarget.value;
    console.log("hi", account);
    // account.username;
    // account[username];
    this.setState({ account: account });
  };

  render() {
    return (
      <div className="col-md-4 m-auto">
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="text-center">Login Page</h1>

          <div className=" username pt-2 px-4">
            <Input
              inputName="username"
              value={this.state.account.username}
              type="text"
              handleInputField={this.handleInputField}
              label="username"
              error={this.state.errors.username}
            />
          </div>

          <div className="pwd pt-2 px-4">
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="password"
              error={this.state.errors.password}
            />
          </div>

          <div className="login pt-2 pb-2 px-4">
            <input
              type="submit"
              className=" btn-danger btn-md btn-block text-capitalize"
              onClick={() => this.props.setLogin(true)}

              // style="font-size: 20px;"
            />
          </div>

          <div>
            <p>
              Don't have an account ? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
