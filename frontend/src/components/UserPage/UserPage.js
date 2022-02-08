import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotModal from '../CreateSpotModal/CreateSpotModal';

import './UserPage.css'

function UserPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div id='user-main-div'>
            <h1>User!</h1>
            <button onClick={() => setShowModal(true)}>Create Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSpotModal />
                </Modal>
            )}
        </div>
    );
}

export default UserPage;
