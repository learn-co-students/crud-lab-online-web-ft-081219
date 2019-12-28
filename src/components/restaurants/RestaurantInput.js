import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    console.log(this.state)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <label>Add a new restaurant </label>
          <input
          type='text'
          value={this.props.state}
          onChange={e => this.handleChange(e)} />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
