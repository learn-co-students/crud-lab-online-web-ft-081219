
import { combineReducers } from "redux";

import cuid from 'cuid';
export const cuidFn = cuid;

const manageRestaurantsAndReviews = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
});
export default manageRestaurantsAndReviews 
function manageRestaurants(state =  [] , action) {
    // console.log("initial state")
    // console.log(state)  
    switch(action.type){
        case "ADD_RESTAURANT": return  [...state,{text: action.text,id: cuid()}] ;
        case "DELETE_RESTAURANT": return [...state].filter(e => e.id !== action.id) ;
        default: return state
    }
}
function manageReviews(state =  [], action) {
  
    switch(action.type) {
       
        case "ADD_REVIEW":
        console.log("printing the action from adding review")
        console.log(action)
     
           const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            
           
        }
         
            return [...state, review]
        case "DELETE_REVIEW":
            return  state.filter(review => review.id !== action.id)
        default:
            return state
    }
}; 