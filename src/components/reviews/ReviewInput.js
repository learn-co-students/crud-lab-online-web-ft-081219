import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = ({target}) => {
    this.setState({
      text: target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const review = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(review)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
        <input type="submit"/>
      </form>
    );
  }
};

export default ReviewInput;
