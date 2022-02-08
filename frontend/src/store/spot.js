import { csrfFetch } from './csrf';
const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';

const allSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        spots
    }
}

const oneSpot = (spot) => {
    return {
        type: GET_ONE_SPOT,
        spot
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

export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);

    if (response.ok) {
        const spot = await response.json();

        dispatch(oneSpot(spot));
        return spot;
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
        case GET_ONE_SPOT: {
            const newState = {spot: action.spot};
            return newState;
        }
        default:
            return state;
    }
}

export default spotsReducer;
