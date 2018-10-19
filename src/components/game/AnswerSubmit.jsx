import React from "react";

const AnswerSubmit = props => {
  return (
    <div className="btn-group">
      <button onClick={props.handleAnswer} name="true">
        True
      </button>
      <button onClick={props.handleAnswer} name="false">
        False
      </button>
    </div>
  );
};

export default AnswerSubmit;
