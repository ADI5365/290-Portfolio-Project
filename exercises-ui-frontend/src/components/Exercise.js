import React from 'react';
import { MdOutlineNotInterested, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            
            <IconContext.Provider value={{className: 'top-react-icons'}}>
                <td><MdOutlineNotInterested onClick={() => onDelete(exercise._id)} /></td>
                <td><MdOutlineDriveFileRenameOutline onClick={() => onEdit(exercise)} /></td>
            </IconContext.Provider>
        </tr>
    );
}

export default Exercise;