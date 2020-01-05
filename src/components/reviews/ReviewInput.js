import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = { text: ''}
  onInputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({text: ''})
  }
  render() {

    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input
          onChange={e => this.onInputChange(e)} 
          type='text'
          value={this.state.text}></input>
          <input type='submit'></input>
          </form>
      </div>
    );
  }
};

export default ReviewInput;
