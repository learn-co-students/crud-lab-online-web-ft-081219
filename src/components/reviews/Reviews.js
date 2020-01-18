import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(rev => (
          <Review key={rev.id} review={rev} delete={this.props.deleteReview} />
        ))}
      </ul>
    );
  }
}

export default Reviews;
