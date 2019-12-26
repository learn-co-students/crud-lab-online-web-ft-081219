import React, { Component } from 'react';
import Reviews from './Reviews';


class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {text: ""}
  }
  handleChange = (event) => {
    // console.log(this.state)
    return this.setState({text: event.target.value})
  }

  handleSubmit= (event) => {

    event.preventDefault()
    // console.log("printing the the state for the ther review")
    // console.log(this.state)

    const text = this.state.text
    const restaurantId= this.props.restaurantId
    this.props.addReview({text:text,restaurantId:restaurantId})
    this.setState({text: ""})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
        </form>
        
      </div>
    );
  }
};

export default ReviewInput;
