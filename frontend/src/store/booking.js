import { csrfFetch } from "./csrf";
const ALL_BOOKINGS_FROM_USERID = 'booking/ALL_BOOKINGS_FROM_USERID';
const GET_ONE_BOOKING = 'booking/GET_ONE_BOOKING';

const allBookingsFromUserId = (bookings) => {
    return {
        type: ALL_BOOKINGS_FROM_USERID,
        bookings
    }
}

const oneBooking = (bookingInfo) => {
    return {
        type: GET_ONE_BOOKING,
        bookingInfo
    }
}

export const getAllBookingsFromUserId = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/all/${userId}`);

    if (response.ok) {
        const bookings = await response.json();

        dispatch(allBookingsFromUserId(bookings));
        return bookings;
    }
}

export const getOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`);

    if (response.ok) {
        const bookingInfo = await response.json();

        dispatch(oneBooking(bookingInfo));
        return bookingInfo;
    }
}

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_BOOKINGS_FROM_USERID: {
            const newState = { ...state, bookingList: action.bookings};
            return newState;
        }
        case GET_ONE_BOOKING: {
            const newState = { ...state, bookingInfo: action.bookingInfo };
            return newState;
        }
        default:
            return state;
    }
}

export default bookingsReducer;
