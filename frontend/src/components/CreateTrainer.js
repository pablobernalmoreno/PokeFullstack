import React, { Component } from "react";
import axios from "axios";

export default class CreateTrainer extends Component {
  state = {
    trainers: [],
    trainerName: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/trainers");
    this.setState({ trainers: res.data });
  }

  trainerNameOnChange = (event) => {
    this.setState({ trainerName: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create Trainer</h3>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.trainerNameOnChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.trainers.map((trainer) => (
              <li
                className="list-group-item list-group-item-action"
                key={trainer._id}
              >
                {trainer.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
