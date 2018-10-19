import React, { Component } from "react";
import Equation from "./components/game/Equation";
import AnswerSubmit from "./components/game/AnswerSubmit";
import Score from "./components/game/Score";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class Game extends Component {
    state = {
        numCorrect  : 0,
        numQuestions: 2
    };
    
    //Answer logic
    handleAnswer = answerWasCorrect => {
        //first we check if the answer was correct
        if (answerWasCorrect) {
            //then we set the state of the correctAnswer prop to increment by 1
            this.setState(currState => ({
                numCorrect: currState.numCorrect + 1
            }));
        }
        //now we set the state of the num of questions and increment by 1
        this.setState(currState => ({
            numQuestions: currState.numQuestions + 1
        }));
    };
    
    render() {
        return (
            //next we add the equation component and values
            <div className="game">
                <h2>Mental Math</h2>
                <Equation value1={value1} value2={value2} value3={value3} proposedAnswer={proposedAnswer} />
                <AnswerSubmit handleAnswer={this.handleAnswer}/>
               <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
            </div>
        );
    }
}

export default Game;
