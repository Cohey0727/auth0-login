import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";
import { QuestionList, QuestionDetail, NewQuestion } from "./components/Question";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={QuestionList} />
      <Route exact path="/question/:questionId" component={QuestionDetail} />
      <Route exact path="/new-question" component={NewQuestion} />
    </div>
  );
}

export default App;
