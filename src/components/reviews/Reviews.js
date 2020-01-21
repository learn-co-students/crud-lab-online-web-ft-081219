import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relevantReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {relevantReviews.map(r => {
          return <Review review={r} key={r.id} delete={this.props.delete}/>
        })}
      </ul>
    );
  }
};

export default Reviews;