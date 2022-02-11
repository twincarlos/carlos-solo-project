import { csrfFetch } from "./csrf";
const ALL_REVIEWS_FROM_USERID = 'review/ALL_REVIEWS_FROM_USERID';
const CREATE_REVIEW = 'review/CREATE_REVIEW';
const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';

const allReviewsFromUserId = (reviews) => {
    return {
        type: ALL_REVIEWS_FROM_USERID,
        reviews
    }
}

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

export const getAllReviewsFromUserId = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/all/${userId}`);

    if (response.ok) {
        const reviews = await response.json();

        dispatch(allReviewsFromUserId(reviews));
        return reviews;
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
    const response = await csrfFetch('/api/reviews', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(deleteReview(review));
    }
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_REVIEWS_FROM_USERID: {
            const newState = { ...state, reviewList: action.reviews};
            return newState;
        }
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
