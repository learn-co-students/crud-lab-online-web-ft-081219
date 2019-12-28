import React, { Component } from 'react';

class ReviewInput extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {text: ''}
  // }

  state = {text: ''}

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review this restaurant: </label>
          <input 
          type='text'
          value={this.state.text} 
          onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
