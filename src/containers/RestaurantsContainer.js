import React, { Component } from 'react'
import { connect } from 'react-redux'

import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

// const mapStateToProps = state => ({restaurants: state.restaurants})
const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({type: "ADD_RESTAURANT", text: restaurant.text}),
  deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id}),
  updateRestaurant: restaurant => dispatch({type: "UPDATE_RESTAURANT", restaurant})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
