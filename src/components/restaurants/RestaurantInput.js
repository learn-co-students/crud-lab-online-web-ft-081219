import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = { text: ''}
  onInputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }
  render() {

    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input onChange={e => this.onInputChange(e)} type='text' name='name' id='name' value={this.state.text}></input>
          <input type='submit'></input>
          </form>
      </div>
    );
  }
};

export default RestaurantInput;
