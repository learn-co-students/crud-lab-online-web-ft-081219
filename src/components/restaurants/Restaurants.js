import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {


    return (
      <div>
        <ul>
          {this.props.restaurants.map(res => (
            <Restaurant key={res.id} restaurant={res} delete={this.props.deleteRestaurant} />
          )
          )}
        </ul>
      </div>
    );
  }
};


export default Restaurants;