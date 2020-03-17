import React, { Component } from "react";
// import Rinput from "./rinput";
import Input from "./input";
import Joi from "joi-browser";

class Register extends Component {
  state = {
    fields: { firstname: "", lastname: "", email: "", password: "" },
    errors: {}
  };

  schema = {
    firstname: Joi.string()
      .min(3)
      .required(),
    lastname: Joi.string()
      .min(2)
      .required(),
    email: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .alphanum()
      .required()
  };

  handleFormSubmit = event => {
    event.preventDefault(); //for input type submit, not required for button
    alert("registration success");
    this.props.history.replace("/login");

    // const errors = {};
    // const fields = this.state.fields;
    // const options = { abortEarly: false };

    // const result = Joi.validate({ fields }, this.schema);
    // console.log(result);

    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);

    // if (firstname.trim() === "") errors.firstname = "firstname is required";
    // if (lastname.trim() === "") errors.lastname = "lastname is required";
    // if (email.trim() === "") errors.email = "email is required";
    // if (password.trim() === "") errors.password = "password is required";

    // console.log(errors);
    // this.setState({ errors });
  };

  handleInputField = event => {
    const fields = {};
    const errors = {};
    const { name, value } = event.currentTarget;

    fields[name] = value;

    // fields[event.currentTarget.name] = event.currentTarget.value;
    // console.log("hi", fields);

    this.setState({ fields: fields });

    const obj = { [name]: value };
    const sch = { [name]: this.schema[name] };
  };

  render() {
    return (
      <div className="col-md-4 m-auto">
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="text-center">Reistration Page</h1>
          <div>
            <Input
              inputName="firstname"
              value={this.state.fields.firstname}
              type="text"
              handleInputField={this.handleInputField}
              label="First Name"
              error={this.state.errors.firstname}
            />
          </div>
          <div>
            <Input
              inputName="lastname"
              value={this.state.fields.lastname}
              type="text"
              handleInputField={this.handleInputField}
              label="Last Name"
              error={this.state.errors.lastname}
            />
          </div>
          <div>
            <Input
              inputName="email"
              value={this.state.fields.email}
              type="text"
              handleInputField={this.handleInputField}
              label="Email"
              error={this.state.errors.email}
            />
          </div>
          <div>
            <Input
              inputName="password"
              value={this.state.fields.password}
              type="password"
              handleInputField={this.handleInputField}
              label="Password"
              error={this.state.errors.password}
            />
          </div>
          <div>
            <button className="btn btn-success">Register</button>
          </div>

          <div>
            <p>
              Do you have an account ? <a href="/login">Login Here</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
