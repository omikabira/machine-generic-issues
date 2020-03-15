import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");

    let loggedIn = true;

    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedIn
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "Kabira" && password === "Kabira123") {
      localStorage.setItem("token", "adoiuashfc32hr23iugrui");
      this.setState({
        loggedIn: true
      });
    }
  }
  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/machine" />;
    }
    return (
      <div className="login">
        <div className="login-box">
          <form onSubmit={this.submitForm}>
            <h2>PLEASE LOG IN</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            ></input>
            <br></br>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            ></input>
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
