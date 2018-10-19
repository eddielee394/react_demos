import React, { Component } from "react";
import Equation from "./components/game/Equation";
import AnswerSubmit from "./components/game/AnswerSubmit";
import Score from "./components/game/Score";

class Game extends Component {
    constructor(props) {
        super(props);
        const valuesArray = this.makeNewQuestion();
        this.state = {
            numCorrect  : 0,
            numQuestions: 2,
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3],
        }
    };
    
    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, proposedAnswer];
    };
    
    updateState = newValuesArray => {
        this.setState(currState => ({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            proposedAnswer: newValuesArray[3],
        }));
    };
    
    //Handle the Score logic
    handleScore = answerWasCorrect => {
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
    
    handleAnswer = event => {
        const newValuesArray = this.makeNewQuestion();
        this.updateState(newValuesArray);
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.handleScore(answerWasCorrect);
    };
    
    evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;
        
        return (
            (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
            (corrAnswer !== proposedAnswer && givenAnswer === 'false')
        );
    }
    
    render() {
        const { value1, value2, value3, proposedAnswer } = this.state;
        return (
            //next we add the equation component and values
            <div className="game">
                <h2>Mental Math</h2>
                <Equation value1={value1} value2={value2} value3={value3} proposedAnswer={proposedAnswer} />
                <AnswerSubmit handleAnswer={this.handleAnswer} />
                <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
            </div>
        );
    }
}

export default Game;
