import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state=[], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = {
        id: cuid(),
        text: action.text
      }
      return [...state, newRestaurant];

    case "DELETE_RESTAURANT":
      return state.filter(restaurant => restaurant.id !== action.id);

    case "UPDATE_RESTAURANT":
      console.log(`stub update ${action.restaurant.text}`)
      return state;

    default:
      return state;
  }
}
