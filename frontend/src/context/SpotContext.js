import { useState, createContext } from 'react';

export const SpotContext = createContext();

export const SpotProvider = props => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState(null);
    const [newNumOfGuests, setNewNumOfGuests] = useState(null);
    const [newImage, setNewImage] = useState('');

    return (
        <SpotContext.Provider value={{ newName, setNewName, newDescription, setNewDescription, newPrice, setNewPrice, newNumOfGuests, setNewNumOfGuests, newImage, setNewImage }}>
            {props.children}
        </SpotContext.Provider>
    );
}
