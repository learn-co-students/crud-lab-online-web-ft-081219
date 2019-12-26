import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect }from 'react-redux'

class RestaurantsContainer extends Component {

find =() =>{
  console.log(this.props)
} 
  render() {
    return (
      <div>
        {this.find()}
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => { console.log("printing state from mapToProps");console.log(state);
  return {restaurants: state.restaurants}
}
const mapDispatchToProps = dispatch =>({
  addRestaurant:  text=>{return dispatch({type:"ADD_RESTAURANT", text: text})},
  removeRestaurant:  id=>{return dispatch({type:"DELETE_RESTAURANT", id: id})}
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
