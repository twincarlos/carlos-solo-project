import { csrfFetch } from "./csrf";
const ALL_BOOKINGS_FROM_USERID = 'booking/ALL_BOOKINGS_FROM_USERID';
const GET_ONE_BOOKING = 'booking/GET_ONE_BOOKING';
const CREATE_BOOKING = 'booking/CREATE_BOOKING';
const DELETE_BOOKING = 'booking/DELETE_BOOKING';
const UPDATE_BOOKING = 'booking/UPDATE_BOOKING';

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

const createBooking = (newBooking) => {
    return {
        type: CREATE_BOOKING,
        newBooking
    }
}

const deleteBooking = (booking) => {
    return {
        type: DELETE_BOOKING,
        booking
    }
}

const updateBooking = (booking) => {
    return {
        type: UPDATE_BOOKING,
        booking
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

export const createOneBooking = (newBooking) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify(newBooking)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createBooking(newBooking));
        return data;
    }
}

export const deleteOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(deleteBooking(booking));
    }
}

export const updateOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(updateBooking(booking));
        return booking;
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
        case CREATE_BOOKING: {
            const newState = { ...state, booking: action.booking};
            return newState;
        }
        case DELETE_BOOKING: {
            const newState = {...state};
            delete newState[action.booking];
            return newState;
        }
        case UPDATE_BOOKING: {
            const newState = {...state};
            return newState;
        }
        default:
            return state;
    }
}

export default bookingsReducer;
