import React, { Component } from 'react';
import Review from './Review';
import { prependOnceListener } from 'cluster';
import { Z_FILTERED } from 'zlib';

class Reviews extends Component {
  display_review=()=>{
    console.log("printing the review")
    console.log(this.props.reviews)
    console.log("this is the review your looking for")
    console.log(this.props.reviews)
    console.log(this.props.restaurantId)
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const reviews = restaurantReviews.map(e => < Review key={e.id} removeReview={this.props.removeReview} restaurantId={this.props.restaurantId} review={e}/>)
    // console.log(this.props.reviews.filter(e => e.restaurantId !== this.props.restaurantId))
    // console.log("=================")
    return reviews
  }
  render() {
    return (
      <ul>
        {this.display_review()}
      </ul>
    );
  }
};

export default Reviews;