import React from "react";
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
      options: [],
      correctAnswer: [],
    };
  }
  componentDidMount() {
    let correct_answer = [
      this.props.quizData[this.state.activeQuestion] &&
        this.props.quizData[this.state.activeQuestion].correct_answer,
    ];
    let incorrect_answersArray = [
      this.props.quizData[this.state.activeQuestion] &&
        this.props.quizData[this.state.activeQuestion].incorrect_answers.join(
          " "
        ),
    ];
    console.log(correct_answer, incorrect_answersArray);
    let allAns = correct_answer.concat(incorrect_answersArray);

    console.log(allAns);

    this.setState({
      options: allAns,
      correctAnswer: correct_answer,
    });
  }
  //   componentDidMount() {
  //     let arrOfIncorrect = [
  //       ...this.props.questions[this.state.currentQuestion].incorrect_answers,
  //     ];

  //     let correctAns =
  //       this.props.questions[this.state.currentQuestion].correct_answer;

  //     let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

  //     this.setState({
  //       options: arrOfAllAns,
  //       correctAnswer: correctAns,
  //     });
  //   }

  //   componentDidUpdate(){

  // handleOptions = () => {
  //   let correct_answer = [
  //     this.props.quizData[this.state.activeQuestion] &&
  //       this.props.quizData[this.state.activeQuestion].correct_answer,
  //   ];
  //   let incorrect_answersArray = [
  //     this.props.quizData[this.state.activeQuestion] &&
  //       this.props.quizData[this.state.activeQuestion].incorrect_answers.join(
  //         " "
  //       ),
  //   ];
  //   console.log(correct_answer, incorrect_answersArray);
  //   let allAns = correct_answer.concat(incorrect_answersArray);

  //   this.setState({
  //     answers: allAns,
  //     correctAnswer: correct_answer,
  //   });
  // };
  handleNextQuestion = () => {
    if (!this.props.answers[this.state.activeQuestion]) {
      alert("You must select answer of current question.");
    } else {
      this.setState((prevState) => {
        return {
          activeQuestion: prevState.activeQuestion + 1,
        };
      });
    }
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
              {this.state.options.map((ans) => {
                console.log(ans);
                return (
                  <>
                    <li
                      onClick={this.props.handleAnswers(
                        ans,
                        this.state.activeQuestion
                      )}
                    >
                      {ans}
                    </li>
                  </>
                );
              })}
              {/* <button onClick={this.handleNextQuestion()}>Next</button> */}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Question;
