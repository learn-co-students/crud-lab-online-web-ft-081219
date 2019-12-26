import React, { Component } from 'react';


class RestaurantInput extends Component {
  constructor(){
    super()
    this.state={text: ""}
    
  }
  handleChange=(event)=>{
    return this.setState({text: event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text'/>

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
