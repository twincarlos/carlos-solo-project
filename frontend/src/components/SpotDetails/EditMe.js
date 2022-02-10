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
            <button onClick={() => setEditModal(true)}>Edit</button>
            <button onClick={() => setDeleteModal(true)}>Delete</button>
        </>
    );
}

export default EditMe;
