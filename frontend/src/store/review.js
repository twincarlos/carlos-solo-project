import { csrfFetch } from "./csrf";
const CREATE_REVIEW = 'review/CREATE_REVIEW';
const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const createReview = (newReview) => {
    return {
        type: CREATE_REVIEW,
        newReview
    }
}

const updateReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

export const createOneReview = (newReview) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview)
    });

    const data = await response.json();
    dispatch(createReview(data));
    return data;
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

export const deleteOneReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(deleteReview(review));
    }
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW: {
            const newState = { ...state, review: action.review };
            return newState;
        }
        case UPDATE_REVIEW: {
            const newState = {...state};
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = {...state};
            delete newState[action.review];
            return newState;
        }
        default:
            return state;
    }
}

export default reviewsReducer;