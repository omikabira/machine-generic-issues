import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <table className="table table-bordered table-hover text-center table-sm">
          <thead>
            <tr className="table-dark text-dark">
              <th colSpan="10">ISSUES - IMPROVEMENT OPPORTUNITIES</th>
            </tr>
            <tr className="table-primary">
              <th>S.No.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Issue Observed By</th>
              <th>Issue Description</th>
              <th>Priority</th>
              <th>Shift</th>
              <th>Issue Owner</th>
              <th>Current Status</th>
              <th>Final Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.ObsBy}</td>
              <td>{data.description}</td>
              <td>{data.priority}</td>
              <td>{data.shift}</td>
              <td>{data.issueOwner}</td>
              <td>{data.currentStatus}</td>
              <td>{data.resolution}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
