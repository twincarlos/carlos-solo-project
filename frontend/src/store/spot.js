import { csrfFetch } from './csrf';
const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
const UPDATE_SPOT = 'spots/UPDATE_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';
const ALL_SPOTS_BY_USERID = '/spots/ALL_SPOTS_BY_USERID'

const allSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        spots
    }
}

const allSpotsByUserId = (spots) => {
    return {
        type: ALL_SPOTS_BY_USERID,
        spots
    }
}

const oneSpot = (spotInfo) => {
    return {
        type: GET_ONE_SPOT,
        spotInfo
    }
}

const addSpot = (newSpot) => {
    return {
        type: ADD_SPOT,
        newSpot
    }
}

const updateSpot = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot
    }
}

const removeSpot = (spot) => {
    return {
        type: REMOVE_SPOT,
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

export const getAllSpotsByUserId = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/all/${userId}`);

    if (response.ok) {
        const spots = await response.json();

        dispatch(allSpotsByUserId(spots));
        return spots;
    }
}

export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);

    if (response.ok) {
        const spotInfo = await response.json();

        dispatch(oneSpot(spotInfo));
        return spotInfo;
    }
}

export const addOneSpot = (newSpot) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(newSpot),
    });

    const data = await response.json();
    dispatch(addSpot(data));
    return response;
}

export const updateOneSpot = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(updateSpot(spot));
        return spot;
    }
}

export const removeOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const spot = await response.json();
      dispatch(removeSpot(spot));
    }
  };

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS: {
            const newState = {};
            action.spots.forEach((spot) => (newState[spot.id] = spot));
            return newState;
        }
        case ALL_SPOTS_BY_USERID: {
            const newState = { ...state, spotList: action.spots};
            return newState;
        }
        case GET_ONE_SPOT: {
            const newState = { ...state, spotInfo: action.spotInfo };
            return newState;
        }
        case ADD_SPOT: {
            const newState = { ...state, spot: action.spot };
            return newState;
        }
        case UPDATE_SPOT: {
            state.spotInfo.spot = action.spot;
            const newState = { ...state};
            return newState;
        }
        case REMOVE_SPOT: {
            const newState = { ...state };
            delete newState[action.spot];
            return newState;
          }
        default:
            return state;
    }
}

export default spotsReducer;
