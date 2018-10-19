import React from "react";

const AnswerSubmit = props => {
  return (
    <div className="btn-group">
      <button onClick={props.handleAnswer} name="false">
        True
      </button>
      <button onClick={props.handleAnswer} name="false">
        False
      </button>
    </div>
  );
};

export default AnswerSubmit;
