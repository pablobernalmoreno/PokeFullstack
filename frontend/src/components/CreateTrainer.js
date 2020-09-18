import React, { Component } from "react";
import axios from "axios";

export default class CreateTrainer extends Component {
  state = {
    trainers: [],
    trainerName: "",
  };

  componentDidMount() {
    this.getTrainers();
  }

  async getTrainers() {
    const res = await axios.get("http://localhost:4000/api/trainers");
    this.setState({ trainers: res.data });
  }

  onChangeTrainerName = (event) => {
    this.setState({ trainerName: event.target.value });
  };

  onSubmitTrainer = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/api/trainers", {
      name: this.state.trainerName,
    });
    this.setState({ trainerName: "" });
    this.getTrainers();
  };

  deleteTrainer = async (id) => {
    await axios.delete(`http://localhost:4000/api/trainers/${id}`);
    this.getTrainers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create Trainer</h3>
            <form onSubmit={this.onSubmitTrainer}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.trainerName}
                  onChange={this.onChangeTrainerName}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.trainers.map((trainer) => (
              <li
                className="list-group-item list-group-item-action"
                key={trainer._id}
                onDoubleClick={() => this.deleteTrainer(trainer._id)}
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
