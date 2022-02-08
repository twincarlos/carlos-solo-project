import { useState, createContext } from 'react';

// 86400000 in 1 day

// const checkinval = Date.now();
// const checkinstr = (new Date(checkinval)).toString();
// console.log(`Today is --> ${checkinstr} with a value of ${checkinval}`);
// YYYY-MM-DDTHH:MM

export const BookingContext = createContext();

export const BookingProvider = props => {
    const now = new Date(Date.now());
    const tomorrow = new Date(86400000 + now.getTime());
    const afterTomorrow = new Date(86400000 + tomorrow.getTime());

    const [checkIn, setCheckIn] = useState(`${tomorrow.getFullYear()}-${(tomorrow.getMonth() + 1).length > 1 ? (tomorrow.getMonth() + 1) : `0${(tomorrow.getMonth() + 1)}`}-${(tomorrow.getDate()).length > 1 ? (tomorrow.getDate()) : `0${(tomorrow.getDate())}`}T${tomorrow.getHours()}:${((tomorrow.getMinutes()).toString()).length > 1 ? (tomorrow.getMinutes()) : `0${(tomorrow.getMinutes())}`}`);
    const [checkOut, setCheckOut] = useState(`${afterTomorrow.getFullYear()}-${(afterTomorrow.getMonth() + 1).length > 1 ? (afterTomorrow.getMonth() + 1) : `0${(afterTomorrow.getMonth() + 1)}`}-${(afterTomorrow.getDate()).length > 1 ? (afterTomorrow.getDate()) : `0${(afterTomorrow.getDate())}`}T${afterTomorrow.getHours()}:${((afterTomorrow.getMinutes()).toString()).length > 1 ? (afterTomorrow.getMinutes()) : `0${(afterTomorrow.getMinutes())}`}`);
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [errors, setErrors] = useState([]);

    return (
        <BookingContext.Provider value={{ checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests, errors, setErrors }}>
            {props.children}
        </BookingContext.Provider>
    );
};
