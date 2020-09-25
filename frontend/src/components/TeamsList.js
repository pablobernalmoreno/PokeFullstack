import React, { Component } from "react";
import axios from "axios";

export default class TeamsList extends Component {
  state = {
    teams: [],
  };

  async getTeams() {
    const res = await axios.get("http://localhost:4000/api/teams");
    this.setState({ teams: res.data });
  }

  componentDidMount() {
    this.getTeams();
  }

  async deleteTeam(id) {
    await axios.delete(`http://localhost:4000/api/teams/${id}`);
    this.getTeams();
  }

  render() {
    return (
      <div className="row">
        {this.state.teams.map((team) => (
          <div className="col-md-4 p-2" key={team._id}>
            <div className="card">
              <div className="card-header">
                <h5>{team.title}</h5>
                <h6>{team.trainer}</h6>
              </div>
              {team.pokes.map((poke) => (
                <div className="card-body" key={poke._id}>
                  {poke.name}
                </div>
              ))}
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteTeam(team._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
