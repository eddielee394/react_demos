import React, { Component } from "react";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class Game extends Component {
  state = {
    correctAnswer: 0,
    numQuestions: 0
  };

  //Answer logic
  handleAnswer = answerWasCorrect => {
    //first we check if the answer was correct
    if (answerWasCorrect) {
      //then we set the state of the correctAnswer prop to increment by 1
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1
      }));
    }
    //now we set the state of the num of questions and increment by 1
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1
    }));
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    );
  }
}

export default Game;
