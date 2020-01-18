export function addRestaurant(text) {
    return { type: "ADD_RESTAURANT", payload: text }
}

export function deleteRestaurant(id) {
    return { type: "DELETE_RESTAURANT", payload: id }
}

export function addReview({ text, restaurantId }) {
    return { type: "ADD_REVIEW", payload: { text, restaurantId } }
}

export function deleteReview(id) {
    return { type: "DELETE_REVIEW", payload: id }
}