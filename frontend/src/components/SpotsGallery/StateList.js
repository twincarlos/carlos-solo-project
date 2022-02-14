import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useContext, useState } from 'react';
import { getAllSpots } from '../../store/spot';
import { BookingContext } from '../../context/BookingContext';

import './SpotsGallery.css';

function StateList () {
    const dispatch = useDispatch();
    const { location, setLocation } = useContext(BookingContext);
    const spotList = useSelector((state) => Object.values(state.spot));
    const [more, setMore] = useState(false);

    const STATES = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Federated States Of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <>
            <ul id='states-nav'>
                <li className={(location === '') ? 'active-li' : null} onClick={() => setLocation('')}>All</li>
                {spotList.map((spot, idx) => (idx < 10) ? <li key={`${spot.id}`} onClick={() => setLocation(spot.state)} className={(location === spot.state) ? 'active-li' : null}>{spot.state}</li> : null)}
                <li id='more-hide' onClick={() => setMore(!more)}>{more ? 'Hide' : 'More'}</li>
            </ul>
            {more && (<ul id='more-ul'>
                { STATES.map((state, idx) => <li className={(location === state) ? 'more-selected' : null} key={`${idx}`} onClick={() => setLocation(state)}>{state}</li>) }
            </ul>)}
        </>
    );
}

export default StateList;
