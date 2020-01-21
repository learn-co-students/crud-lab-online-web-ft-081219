import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = ({target}) => {
    this.setState({
      text: target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
