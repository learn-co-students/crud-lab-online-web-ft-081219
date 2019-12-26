import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.props.reviews} removeReview={this.props.removeReview} restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}
const mapStateToProps = state =>{ return {reviews: state.reviews} }
const mapDispatchToProps = dispatch =>({
  addReview:  (review)=>{ return dispatch({type:"ADD_REVIEW", review}) },
  removeReview: ( id,restaurantId)=>{return dispatch({type:"DELETE_REVIEW", id: id ,restaurantId: restaurantId})}
})


export default  connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
