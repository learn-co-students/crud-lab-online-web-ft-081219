import cuid from 'cuid';

export default function manageReview(state=[], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const newReview = {
        id: cuid(),
        ...action.review
      }
      return [...state, newReview];

    case "DELETE_REVIEW":
      return state.filter(review => review.id !== action.id);

    default:
      return state;
  }
}