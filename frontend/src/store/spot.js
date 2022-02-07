import { csrfFetch } from './csrf';
const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';

const allSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        spots
    }
}

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const spots = await response.json();

        dispatch(allSpots(spots));
        return spots;
    }
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS: {
            const newState = {};
            action.spots.forEach((spot) => (newState[spot.id] = spot));
            return newState;
        }
        default:
            return state;
    }
}

export default spotsReducer;
