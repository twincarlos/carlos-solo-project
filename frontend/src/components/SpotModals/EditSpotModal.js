import { useState, useContext } from 'react';
import { useDispatch } from "react-redux";
import { SpotContext } from '../../context/SpotContext';
import { updateOneSpot } from '../../store/spot';

function EditSpotModal({ spot }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(spot.spot.name);
    const [price, setPrice] = useState(spot.spot.price);
    const [numOfGuests, setNumOfGuests] = useState(spot.spot.numOfGuests);
    const [description, setDescription] = useState(spot.spot.description);
    const [image, setImage] = useState(spot.spot.image);
    const [errors, setErrors] = useState('');
    const { setNewName, setNewDescription, setNewPrice, setNewNumOfGuests, setNewImage } = useContext(SpotContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = [];

        if (name.length < 3) err.push('Name must be at least 3 characters long.');
        if (name.length > 50) err.push('Name must be no greater than 50 characters.');
        if (numOfGuests < 1) err.push('You must allow at least 1 guest.');
        if (description < 10) err.push('Description must be at least 10 characters long.');
        if (image.length < 3) err.push('Please enter an image for your spot.');

        setErrors(err);

        if (err.length === 0) {
            const newSpot = {
                id: spot.spot.id,
                name,
                price,
                numOfGuests,
                description,
                image
            }
            setNewName(name);
            setNewDescription(description);
            setNewPrice(price);
            setNewNumOfGuests(numOfGuests);
            setNewImage(image);
            spot.setEditModal(false);
            return dispatch(updateOneSpot(newSpot));
        }
    }

    return(
        <div id='edit-form-modal'>
            <h1>Edit me!</h1>
            { errors && <ul id='edit-spot-errors'>{errors.map((err, i) => <li key={i}>{err}</li>)}</ul> }
            <form id='edit-spot-form' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' placeholder='Name of your spot' onChange={(e) => setName(e.target.value)} value={name}></input>
                </label>
                <label>
                    Update price per night:
                    <input type='number' placeholder='$' onChange={(e) => setPrice(e.target.value)} value={price}></input>
                </label>
                <label>
                    Number of guests allowed:
                    <input type='number' placeholder='Number of guests' onChange={(e) => setNumOfGuests(e.target.value)} value={numOfGuests}></input>
                </label>
                <label>
                    Update description:
                    <textarea placeholder='Tell us about your spot' onChange={(e) => setDescription(e.target.value)} defaultValue={description}></textarea>
                </label>
                <label>
                    Update image:
                    <input type='text' placeholder='Upload an image' onChange={(e) => setImage(e.target.value)} value={image}></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default EditSpotModal;
