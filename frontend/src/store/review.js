import { csrfFetch } from "./csrf";
const UPDATE_REVIEW = 'review/UPDATE_REVIEW';

const updateReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

export const updateOneReview = (data) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(updateReview(review));
        return review;
    }
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REVIEW: {
            const newState = {...state};
            return newState;
        }
        default:
            return state;
    }
}

export default reviewsReducer;
