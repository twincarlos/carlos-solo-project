import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOneSpot } from '../../store/spot';

function CreateSpotModal() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        // return dispatch(addOneSpot({ name, userId: sessionUser.id, address, city, state, price, numOfGuests, description, image }));
        const spot = {
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
        return dispatch(addOneSpot(spot));
        // console.log(spot);
    }

    return (
        <div id='create-spot-modal'>
            <h1>Add your spot!</h1>
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
