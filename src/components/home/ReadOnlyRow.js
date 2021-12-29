import React from 'react'

export const ReadOnlyRow = ({ user,handleEditClick,handleDeleteClick }) => {
    return (
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <button type="button" onClick={(event)=>handleEditClick(event,user)}>
          Edit 
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" onClick={()=>handleDeleteClick(user.id)}>
          Delete 
          </button>

        </td>
      </tr>
    ) 
}
