import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  display_restaurants=()=>{
    // console.log(this.props.restaurants)
    return this.props.restaurants.map(e => <Restaurant  key={e.id} removeRestaurant={this.props.removeRestaurant} restaurant={e}/>)
  }
  render() {
    return(
      <ul>
        {this.display_restaurants()}
      </ul>
    );
  }
};

export default Restaurants;