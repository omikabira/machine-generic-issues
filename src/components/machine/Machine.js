import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import "./Machine.css";
import Table from "../table/Table";

 class Machine extends Component {
  constructor(props) {
    super(props);

    this.selectMachine = this.selectMachine.bind(this);
    this.showIssue = this.showIssue.bind(this);

    const token = localStorage.getItem("token");
    let loggedIn = true;

    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
      machine: "",
      showTable: false,
      currentIssue: {},
      issues:this.props.issues,
      
    };
  }

  selectMachine(e) {
    this.setState({
      machine: e.target.value
    });
  }

  showIssue() {
    // alert(this.state.machine);
    var getIssue = this.state.issues.find(
      item => item.id === this.state.machine
    );

    this.setState({
      currentIssue: {
        id: getIssue.id,
        date: getIssue.date,
        time: getIssue.time,
        ObsBy: getIssue.ObsBy,
        description: getIssue.description,
        priority: getIssue.priority,
        shift: getIssue.shift,
        issueOwner: getIssue.issueOwner,
        currentStatus: getIssue.currentStatus,
        resolution: getIssue.resolution
      },
      showTable: true
    });

    // console.log(this.state.currentIssue, getIssue, this.state.machine);
  }
  render() {
    const issues = this.state.issues;
    const showTable = this.state.showTable;
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    // console.log(this.props)
    return (

      <div className="container mt-4">
        <div className="row">
          {this.props.myName}
        </div>

        <div className="row">
          <div className="col-12">
            <Link className="btn btn-danger float-right" to="/logout">
              Logout
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h2>Machine Selection</h2>
            <hr></hr>
          </div>
          <div className="col-6">
            <select
              name="machine"
              id="machine"
              value={this.state.machine}
              onChange={this.selectMachine}
              className="form-control"
            >
              <option>Select Machine</option>
              <option>M1</option>
              <option>M2</option>
              <option>M3</option>
              <option>M4</option>
            </select>
          </div>
          <div className="col-6">
            <button className="btn btn-info" onClick={this.showIssue}>
              Generic Issues
            </button>
          </div>
        </div>
        <br></br>

        <div className="row">
          {showTable === true ? <Table data={this.state.currentIssue} /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(Machine);