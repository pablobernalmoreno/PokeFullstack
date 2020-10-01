import React, { Component } from "react";
import axios from "axios";
export default class CreateTeam extends Component {
  state = {
    trainers: [],
    trainerChosen: "",
    title: "",
    pokes: [],
    initialPoke: "",
    poke2: "",
    edit: false,
    idOfTeam: "",
  };

  componentDidMount() {
    this.getTrainers();
    if (this.props.match.params.id) {
      this.setState({ edit: true });
      this.setState({ idOfTeam: this.props.match.params.id });
    }
    this.getPokes();
  }

  async getTrainers() {
    const res = await axios.get("http://localhost:4000/api/trainers");
    this.setState({
      trainers: res.data,
      trainerChosen: res.data[0].name,
    });
  }

  async getPokes() {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0"
    );
    this.setState({
      pokes: res.data.results,
      initialPoke: res.data.results[0].name,
      poke2: res.data.results[0].name,
    });
  }

  onSubmitTeam = async (event) => {
    event.preventDefault();
    const newTeam = {
      title: this.state.title,
      pokes: [{ name: this.state.initialPoke }, { name: this.state.poke2 }],
      trainer: this.state.trainerChosen,
    };
    if (this.state.edit) {
      await axios.put(
        `http://localhost:4000/api/teams/${this.state.idOfTeam}`,
        newTeam
      );
    } else {
      await axios.post("http://localhost:4000/api/teams", newTeam);
    }
    window.location.href = "/";
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
              placeholder="Team title"
              name="title"
              onChange={this.onInputChange}
              required
            ></input>
          </div>

          <div className="form-group">
            <select
              name="initialPoke"
              className="form-control"
              onChange={this.onInputChange}
              required
            >
              {this.state.pokes.map((poke) => (
                <option key={poke.url} value={poke.name}>
                  {poke.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select
              name="poke2"
              className="form-control"
              onChange={this.onInputChange}
              required
            >
              {this.state.pokes.map((poke) => (
                <option key={poke.url} value={poke.name}>
                  {poke.name}
                </option>
              ))}
            </select>
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
