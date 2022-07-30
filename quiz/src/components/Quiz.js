import React from "react";
import Header from "./Header";
import Question from "./Question";

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

export default Quiz;
