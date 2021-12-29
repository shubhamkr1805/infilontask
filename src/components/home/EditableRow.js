import React from 'react'

export const EditableRow = ({editFormData,handleEditFormChange}) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder='Enter ID' name="id" value={editFormData.id} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter Firstname' name="first_name" value={editFormData.first_name} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter Lastname' name="last_name" value={editFormData.last_name} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
            <input type="email" required="required" placeholder='Enter Email' name="email" value={editFormData.email} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <button type="submit">
                    Save
                </button>
            </td>


        </tr>
    )
}
