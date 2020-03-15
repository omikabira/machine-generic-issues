import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div>
        <h6>You have been logged out!!</h6>
        <Link to="/login">Login Again</Link>
      </div>
    );
  }
}
