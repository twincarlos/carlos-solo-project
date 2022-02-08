import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";

import './BecomeHost.css';

function Apply ({ apply, setApply }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const userId = useSelector(state => state.session.user.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if (password === confirmPassword) {
            dispatch(sessionActions.becomeUserHost({ userId, password }))
                .catch(
                    async (res) => {
                        const data = await res.json();
                        if (data.errors) {
                            setErrors(data.errors);
                        }
                    }
                );
        } else {
            setErrors(['Passwords do not match.'])
        }
    }

    return (
        <>
            <button id='cancel-apply' onClick={() => setApply(!apply)}>{'< Cancel'}</button>
            <p>To become a host, please enter your credentials:</p>
            {errors.length > 0 ? <ul id='errors-host'>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul> : null}
            <form onSubmit={handleSubmit}>
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <input type='password' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                <button id='submit-apply'>Submit</button>
            </form>
        </>
    );
}

export default Apply;
