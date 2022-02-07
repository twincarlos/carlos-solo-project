import { csrfFetch } from './csrf';
const GET_ALL_IMAGES = 'image/getAllImages';

const loadImages = (images) => {
    return {
        type: GET_ALL_IMAGES,
        images
    }
}

export const getAllImages = () => async (dispatch) => {
    const response = await csrfFetch('/api/images');

    if (response.ok) {
        const data = await response.json();

        dispatch(loadImages(data));
        return data;
    }
}

const initialState = {};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_IMAGES: {
            const newState = {};
            action.images.forEach((image) => (newState[image.id] = image));
            return newState;
        }
        default:
            return state;
    }
}

export default imagesReducer;
