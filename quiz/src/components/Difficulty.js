import React from "react";
import { NavLink } from "react-router-dom";

class Difficulty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let difficulties = ["easy", "medium", "hard"];
    return (
      <>
        <h2>Select Difficulty Level</h2>
        <div className="wrapper level">
          {difficulties.map((difficulty) => {
            return (
              <>
                <button
                  className={
                    this.props.difficulty === difficulty
                      ? "active-category"
                      : "category"
                  }
                  onClick={(event) => this.props.handleLevel(event, difficulty)}
                >
                  {difficulty.toUpperCase()}
                </button>
              </>
            );
          })}
          <NavLink
            className="none"
            to={`/quiz/${this.props.category.id}/${this.props.difficulty}`}
          >
            <button className=" start-btn">Get Started</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default Difficulty;
