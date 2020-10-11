import React, { Component, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const NewQuestion: React.FC = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({ title: "", description: "" });
  const { getIdTokenClaims } = useAuth0();
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    await axios.post(
      "http://localhost:8081",
      {
        title: formValues.title,
        description: formValues.description,
      },
      {
        headers: { Authorization: `Bearer ${getIdTokenClaims()}` },
      }
    );
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card border-primary">
            <div className="card-header">New Question</div>
            <div className="card-body text-left">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title:</label>
                <input
                  disabled={submitting}
                  type="text"
                  onBlur={(e) => {
                    const title = e.target.value;
                    setFormValues((_formValues) => ({ ..._formValues, title }));
                  }}
                  className="form-control"
                  placeholder="Give your question a title."
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description:</label>
                <input
                  disabled={submitting}
                  type="text"
                  onBlur={(e) => {
                    const description = e.target.value;
                    setFormValues((_formValues) => ({
                      ..._formValues,
                      description,
                    }));
                  }}  
                  className="form-control"
                  placeholder="Give more context to your question."
                />
              </div>
              <button
                disabled={submitting}
                className="btn btn-primary"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
