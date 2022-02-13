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

    const [checkIn, setCheckIn] = useState(`${tomorrow.getFullYear()}-${((tomorrow.getMonth() + 1).toString()).length > 1 ? (tomorrow.getMonth() + 1) : `0${(tomorrow.getMonth() + 1)}`}-${((tomorrow.getDate()).toString()).length > 1 ? (tomorrow.getDate()) : `0${(tomorrow.getDate())}`}T${((tomorrow.getHours()).toString()).length > 1 ? (tomorrow.getHours()) : `0${(tomorrow.getHours())}`}:${((tomorrow.getMinutes()).toString()).length > 1 ? (tomorrow.getMinutes()) : `0${(tomorrow.getMinutes())}`}`);
    const [checkOut, setCheckOut] = useState(`${afterTomorrow.getFullYear()}-${((afterTomorrow.getMonth() + 1).toString()).length > 1 ? (afterTomorrow.getMonth() + 1) : `0${(afterTomorrow.getMonth() + 1)}`}-${((afterTomorrow.getDate()).toString()).length > 1 ? (afterTomorrow.getDate()) : `0${(afterTomorrow.getDate())}`}T${((afterTomorrow.getHours()).toString()).length > 1 ? (afterTomorrow.getHours()) : `0${(afterTomorrow.getHours())}`}:${((afterTomorrow.getMinutes()).toString()).length > 1 ? (afterTomorrow.getMinutes()) : `0${(afterTomorrow.getMinutes())}`}`);
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [errors, setErrors] = useState([]);
    const [location, setLocation] = useState('');
    const [render, setRender] = useState(false);

    return (
        <BookingContext.Provider value={{ location, setLocation, checkIn, setCheckIn, checkOut, setCheckOut, numOfGuests, setNumOfGuests, errors, setErrors, render, setRender }}>
            {props.children}
        </BookingContext.Provider>
    );
};
