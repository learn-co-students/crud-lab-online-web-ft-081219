import React, { Component } from "react";
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    this.props.addReview({ text, restaurantId: this.props.restaurantId });
    this.setState({
      text: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
