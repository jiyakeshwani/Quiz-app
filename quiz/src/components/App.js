import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Header from "./Header";
import Quiz from "./Quiz";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      difficulty: "",
    };
  }

  handleLevel = (event, level) => {
    this.setState({
      difficulty: level,
    });
    console.log(level);
  };
  handleCategory = (category) => {
    this.setState({
      category: category,
    });
    console.log(category.id);
  };
  render() {
    return (
      <>
        <Header />
        <Route path="/" exact>
          <Category
            handleCategory={this.handleCategory}
            category={this.state.category}
          />
          <Difficulty
            handleLevel={this.handleLevel}
            difficulty={this.state.difficulty}
            category={this.state.category}
          />
        </Route>
        <Route path="/quiz/:category/:difficulty" component={Quiz} />
      </>
    );
  }
}

export default App;
