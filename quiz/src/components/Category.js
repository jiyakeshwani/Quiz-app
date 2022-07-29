import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [],
    };
  }
  componentDidMount() {
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((categoryData) =>
        this.setState({
          categoryData: categoryData.trivia_categories,
        })
      );
  }
  render() {
    return (
      <>
        <div className="container  wrapper ">
          <h2>Select Categories</h2>
          {this.state.categoryData.map((category) => {
            return (
              <>
                <button
                  className={
                    this.props.category === category
                      ? "active-category"
                      : "category"
                  }
                  onClick={() => this.props.handleCategory(category)}
                >
                  {category.name}
                </button>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Category;
