import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Machine.css";
import Table from "../table/Table";

export default class Machine extends Component {
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
      issues: [
        {
          id: "M1",
          date: "20/05/2020",
          time: "12am",
          ObsBy: "Omi",
          description: "Leakage",
          priority: "medium",
          shift: 1,
          issueOwner: "Shubham",
          currentStatus: "No Electricity",
          resolution: "Start Generator"
        },
        {
          id: "M2",
          date: "15/03/2020",
          time: "10am",
          ObsBy: "Neha",
          description: "Shortage",
          priority: "high",
          shift: 1,
          issueOwner: "Pankaj",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        },
        {
          id: "M3",
          date: "14/05/2020",
          time: "09am",
          ObsBy: "Shivani",
          description: "Shortage",
          priority: "low",
          shift: 1,
          issueOwner: "Pankaj",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        },
        {
          id: "M4",
          date: "25/10/2020",
          time: "11am",
          ObsBy: "Rahul",
          description: "Shortage",
          priority: "low",
          shift: 1,
          issueOwner: "Pankaj",
          currentStatus: "Machine Stopped",
          resolution: "Increase Inventory"
        }
      ]
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
    return (
      <div className="container mt-4">
        <div className="row"></div>

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
