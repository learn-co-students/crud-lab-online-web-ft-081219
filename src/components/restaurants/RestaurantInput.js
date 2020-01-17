import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {text: ''}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <h2>Submit Restaurant</h2>

        <form onSubmit={this.handleSubmit} >
          <input type='text' name='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
