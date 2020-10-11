import React, { Component, useState } from "react";
import axios from "axios";
import { QuestionDetailItem } from "../../types/Question";
import { RouteChildrenProps } from "react-router";
import useAsyncEffect from "../../hooks/useAsyncEffect";

type Params = {
  questionId: string;
};

type Props = {} & RouteChildrenProps<Params>;

const Question: React.FC<Props> = (props) => {
  const [question, setQuestion] = useState<QuestionDetailItem | null>(null);

  useAsyncEffect(async () => {
    const { match } = props;
    const { questionId } = match!.params;
    const question = (await axios.get(`http://localhost:8081/${questionId}`))
      .data;
    setQuestion(question);
  }, []);

  if (question === null) return <p>Loading ...</p>;
  return (
    <div className="container">
      <div className="row">
        <div className="jumbotron col-12">
          <h1 className="display-3">{question.title}</h1>
          <p className="lead">{question.description}</p>
          <hr className="my-4" />
          <p>Answers:</p>
          {question.answers.map((answer, idx) => (
            <p className="lead" key={idx}>
              {answer.answer}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
