import React from 'react'
import './AddNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNew = () => {
    return (
        <div>
            <div className='add'>
                <div className='box'>
                <FontAwesomeIcon className='plus' icon={faPlus} />
                <h4>Add new dish</h4>
                </div>
            </div>
        </div>
    )
}

export default AddNew