import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";
import Question from "./components/Question";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Questions} />
      <Route exact path="/question/:questionId" component={Question} />
    </div>
  );
}

export default App;
