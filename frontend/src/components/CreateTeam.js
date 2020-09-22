import React, { Component } from "react";
import axios from "axios";

export default class CreateTeam extends Component {
  state = {
    trainers: [],
    trainerChosen: "",
    team: "",
    pokes: "",
  };

  componentDidMount() {
    this.getTrainers();
  }

  async getTrainers() {
    const res = await axios.get("http://localhost:4000/api/trainers");
    this.setState({ trainers: res.data });
  }

  onSubmitTeam = (event) => {
    event.preventDefault();
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Team</h4>

          {/**SELECT TRAINER */}
          <div className="form-group">
            <select
              className="form-control"
              name="trainerChosen"
              onChange={this.onInputChange}
            >
              {this.state.trainers.map((trainer) => (
                <option key={trainer._id} value={trainer.name}>
                  {trainer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Team"
              name="team"
              onChange={this.onInputChange}
              required
            ></input>
          </div>

          <div className="form-group">
            <textarea
              name="pokes"
              className="form-control"
              placeholder="Pokémon"
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>

          <form onSubmit={this.onSubmitTeam}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
