import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.css"
import { ReadOnlyRow } from "./ReadOnlyRow";
import { EditableRow } from "./EditableRow";

const Home1 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            console.log("Result")
            const result = await axios("https://reqres.in/api/users?page=1");
            setData(result.data.data);
            console.log("Result", result.data)
        })();
    }, []);

    const [editContactId, setEditContactid] = useState(null)
    const [editFormData, setEditFormData] = useState({
        id:"" ,
        first_name:"",
        last_name:"",
        email:"",
    })

    const handleEditFormChange = (event) =>{
        event.preventDefault();
        const fieldName=event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData ={ ...editFormData };
        
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData)
    }

    const handleEditClick =(event,user)=>{
        event.preventDefault();
        setEditContactid(user.id);

        const formValues ={
            id:user.id,
            first_name:user.first_name,
            last_name:user.last_name,
            email:user.email,
        
        }
        setEditFormData(formValues)
    }

    const handleDeleteClick =(userID) =>{
        const newContacts = [...data];
        const index = data.findIndex((user) => user.id === userID)
        
        newContacts.splice(index, 1)
        setData(newContacts)
    }
    return (
        <div>
            <h1 id="title">Task by Shubham Kumar</h1>
            <form>
                <table id="users">
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(user => {
                            return (
                                <>
                                    {editContactId === user.id ?
                                    ( <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} /> )
                                    :(
                                        <ReadOnlyRow user={user} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}


                                </>
                            )
                        })
                        }
                    </tbody>
                </table>
            </form>
           
        </div>
    )
}

export default Home1;