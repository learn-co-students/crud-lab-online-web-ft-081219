import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview, deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

export default connect(mapStateToProps, {addReview, deleteReview})(ReviewsContainer)
