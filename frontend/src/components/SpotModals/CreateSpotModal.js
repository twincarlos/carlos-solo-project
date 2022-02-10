import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOneSpot } from '../../store/spot';

function CreateSpotModal({ setRender, setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState(1000.00);
    const [numOfGuests, setNumOfGuests] = useState(2);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = [];

        if (name.length < 3) err.push('Name must be at least 3 characters long.');
        if (name.length > 50) err.push('Name must be no greater than 50 characters.');
        if (address.length < 5) err.push('Enter a valid address.');
        if (city.length < 3) err.push('City name must be at least 3 characters.');
        if (state.length < 3) err.push('Please enter a state.');
        if (numOfGuests < 1) err.push('You must allow at least 1 guest.');
        if (description < 10) err.push('Description must be at least 10 characters long.');
        if (image.length < 3) err.push('Please enter an image for your spot.');

        setErrors(err);

        if (err.length === 0) {
            const newSpot = {
                name,
                userId: sessionUser.id,
                address,
                city,
                state,
                price,
                numOfGuests,
                description,
                image
            }
            // setSuccess(true);
            setRender(true);
            setShowModal(false);
            return dispatch(addOneSpot(newSpot));
        }
    }

    return (
        <div id='create-spot-modal'>
            <h1>Add your spot!</h1>
            { errors && <ul id='create-spot-errors'>{errors.map((err, i) => <li key={i}>{err}</li>)}</ul> }
            {/* { success && <h2 id='success'>Success!</h2>} */}
            <form id='create-spot-form' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' placeholder='Name of your spot' onChange={(e) => setName(e.target.value)} value={name}></input>
                </label>
                <label>
                    Street Address:
                    <input type='text' placeholder='Street address' onChange={(e) => setAddress(e.target.value)} value={address}></input>
                </label>
                <label>
                    City:
                    <input type='text' placeholder='City' onChange={(e) => setCity(e.target.value)} value={city}></input>
                </label>
                <label>
                    State:
                    <input type='text' placeholder='State' onChange={(e) => setState(e.target.value)} value={state}></input>
                </label>
                <label>
                    Price per night:
                    <input type='number' placeholder='$' onChange={(e) => setPrice(e.target.value)} value={price}></input>
                </label>
                <label>
                    Number of guests allowed:
                    <input type='number' placeholder='Number of guests' onChange={(e) => setNumOfGuests(e.target.value)} value={numOfGuests}></input>
                </label>
                <label>
                    Add a description:
                    <textarea placeholder='Tell us about your spot' onChange={(e) => setDescription(e.target.value)} defaultValue=''></textarea>
                </label>
                <label>
                    Upload an image:
                    <input type='text' placeholder='Upload an image' onChange={(e) => setImage(e.target.value)} value={image}></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateSpotModal;
