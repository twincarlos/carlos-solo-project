import { Modal } from "../../context/Modal";
import { useState } from 'react';
import EditSpotModal from '../SpotModals/EditSpotModal';
import DeleteSpotModal from '../SpotModals/DeleteSpotModal';

function EditMe ({ spot }) {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <>
            {editModal && (
                <Modal onClose={() => setEditModal(false)}>
                    <EditSpotModal spot={{ spot, setEditModal }}/>
                </Modal>
            )}
            {deleteModal && (
                <Modal onClose={() => setDeleteModal(false)}>
                    <DeleteSpotModal spot={{ spot }}/>
                </Modal>
            )}
            <div id='edit-delete-spot'>
                <button id='edit-spot-button' onClick={() => setEditModal(true)}><i className="fas fa-i-cursor"></i> Edit Spot</button>
                <button id='delete-spot-button' onClick={() => setDeleteModal(true)}><i className="far fa-trash-alt"></i> Delete Spot</button>
            </div>
        </>
    );
}

export default EditMe;
