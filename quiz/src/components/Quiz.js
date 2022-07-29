import React from "react";
import Header from "./Header";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: [],

      answers: [],
      submitted: false,
    };
  }

  componentDidMount() {
    let category = this.props.match.params.category;
    let difficulty = this.props.match.params.difficulty;
    console.log(category, difficulty);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then((quizData) => {
        this.setState({
          quizData: quizData.results,
        });
      });
  }
  handleSubmit = () => {
    this.setState((prevState) => ({
      submitted: !prevState.submitted,
    }));
  };

  handleAnswers = (answer, question) => {
    if (!this.state.answers[question]) {
      this.setState((prevState) => {
        let newAns = prevState.answers.concat(answer);
        return {
          answers: prevState.answers,
        };
      });
    } else {
      this.setState((prevState) => {
        prevState.answers[question] = answer;
        return {
          answers: prevState.answers,
        };
      });
    }
  };
  render() {
    return (
      <>
        <div className="quiz">
          {this.state.quizData ? (
            <Question
              quizData={this.state.quizData}
              answers={this.state.answers}
              handleAnswers={this.handleAnswers}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
      answers: null,
      correctAnswer: null,
    };
  }
  //   componentDidMount() {
  //     let wrongAns = [...this.props.quizData[0]?.incorrect_answers];
  //     let rightAns = this.props.quizData[0]?.correct_answer;
  //     let ans = [wrongAns.concat(rightAns)];
  //     console.log(ans);
  //     this.setState({
  //       answers: ans,
  //       correctAnswer: rightAns,
  //     });
  //   }

  //   componentDidUpdate(){

  //   }
  handleOptions = () => {
    let wrongAns = [...this.props.quizData[0]?.incorrect_answers];
    let rightAns = this.props.quizData[0].correct_answer;
    let ans = [wrongAns.concat(rightAns)];
    console.log(ans);
    this.setState({
      answers: ans,
      correctAnswer: rightAns,
    });
  };
  handleNextQuestion = () => {
    this.setState((prevState) => ({
      activeQuestion: prevState.activeQuestion + 1,
    }));
  };

  render() {
    let currentQues = this.props.quizData[this.state.activeQuestion];
    console.log(currentQues);
    console.log(currentQues?.category);
    // let wrongAns = [
    //   ...currentQues[this.state.activeQuestion]?.incorrect_answers,
    // ];
    // let rightAns = currentQues[this.state.activeQuestion].correct_answer;
    // let ans = [wrongAns.concat(rightAns)];

    return (
      <>
        <div className="container">
          <h3>{currentQues?.category}</h3>
          <h4>{currentQues?.difficulty}</h4>
          <div className="ques">
            <span className="num">
              Question No- {this.state.activeQuestion + 1}
            </span>
            <h5>{currentQues?.question}</h5>
            <ul>
              <li>Options</li>
              {this.handleOptions()}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Quiz;
