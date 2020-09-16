import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import TeamsList from "./components/TeamsList";
import CreateTeam from "./components/CreateTeam";
import CreateTrainer from "./components/CreateTrainer";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={TeamsList} />
      <Route path="/edit/:id" component={CreateTeam} />
      <Route path="/create" component={CreateTeam} />
      <Route path="/trainer" component={CreateTrainer} />
    </Router>
  );
}

export default App;