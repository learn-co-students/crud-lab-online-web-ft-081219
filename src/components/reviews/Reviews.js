import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {

    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviewList = reviews.map((review, index) => < Review 
      key={index} 
      review={review} 
      deleteReview={this.props.deleteReview} />
    )

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
      
    );
  }
};

export default Reviews;


