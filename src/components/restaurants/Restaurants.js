import React, { Component } from 'react';

import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <div>
        <h3>Restaurants</h3>

        <ul>
          {this.props.restaurants.map(restaurant =>
            <Restaurant key={restaurant.id} id={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
          )}
        </ul>
      </div>
    );
  }
};

export default Restaurants;