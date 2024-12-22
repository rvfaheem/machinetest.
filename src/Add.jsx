import React, { useState } from 'react'
import axios from 'axios';

export const Add = () => {

    const [data,setData]=useState('');

    let handleChange=(event) =>{
        setData({ ...data, [event.target.name]:event.target.value});
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        let response = await axios.post(`http://localhost:4000/user/add/`,data)
        console.log(response);
    }
  return (
    <div>
        <div className='bg-slate-500 w-3/6 h-44 p-4 m-80 rounded'>
        <form onSubmit={handleSubmit}>
            <div className=''>
            <label>Name</label>
            <input className='h-5 w-80' type="text" name='name' onChange={handleChange} />
  
            <label>Gmail</label>
            <input className='h-5 w-80' type="text" name='gmail' onChange={handleChange} /><br />
            </div><br />
            <div>
            <label>Password</label>
            <input className='h-5 w-80' type="text" name='password' onChange={handleChange} />
            </div><br/>
            <button className='text-white bg-blue-500 p-2 rounded ' type="submit" >Submit</button>
        </form>    

        </div>
    </div>
  )
}




    // import React, { useState, useEffect } from 'react';
    // import axios from 'axios';
    
    // export const Add = () => {
    //     const [data, setData] = useState({}); // For form input
    //     const [users, setUsers] = useState([]); // To store the list of users
    //     const [editing, setEditing] = useState(null); // To handle editing state
    
    //     // Fetch users when the component is loaded
    //     useEffect(() => {
    //         fetchUsers();
    //     }, []);
    
    //     // Fetch all users from the backend
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/user');
    //             setUsers(response.data);
    //         } catch (error) {
    //             console.error('Error fetching users:', error);
    //         }
    //     };
    
    //     // Handle form input changes
    //     const handleChange = (event) => {
    //         setData({ ...data, [event.target.name]: event.target.value });
    //     };
    
    //     // Add new user
    //     const handleSubmit = async (event) => {
    //         event.preventDefault();
    //         try {
    //             await axios.post('http://localhost:4000/user/add', data);
    //             setData({}); // Clear the form
    //             fetchUsers(); // Refresh the user list
    //         } catch (error) {
    //             console.error('Error adding user:', error);
    //         }
    //     };
    
    //     // Update an existing user
    //     const handleUpdate = async (id) => {
    //         try {
    //             await axios.put(`http://localhost:4000/user/update/${id}`, data);
    //             setEditing(null); // Exit editing mode
    //             setData({}); // Clear the form
    //             fetchUsers(); // Refresh the user list
    //         } catch (error) {
    //             console.error('Error updating user:', error);
    //         }
    //     };
    
    //     // Delete a user
    //     const handleDelete = async (id) => {
    //         try {
    //             await axios.delete(`http://localhost:4000/user/delete/${id}`);
    //             fetchUsers(); // Refresh the user list
    //         } catch (error) {
    //             console.error('Error deleting user:', error);
    //         }
    //     };
    
    //     return (
    //         <div>
    //             <div className="bg-slate-500 w-9/12 h-auto p-4">
    //                 <form onSubmit={editing ? () => handleUpdate(editing) : handleSubmit}>
    //                     <label>Name</label>
    //                     <input
    //                         className="h-5 w-80"
    //                         type="text"
    //                         name="name"
    //                         value={data.name || ''}
    //                         onChange={handleChange}
    //                     />
    //                     <label>Email</label>
    //                     <input
    //                         className="h-5 w-80"
    //                         type="email"
    //                         name="gmail"
    //                         value={data.gmail || ''}
    //                         onChange={handleChange}
    //                     />
    //                     <label>Password</label>
    //                     <input
    //                         className="h-5 w-80"
    //                         type="password"
    //                         name="password"
    //                         value={data.password || ''}
    //                         onChange={handleChange}
    //                     />
    //                     <button className="text-white bg-blue-500 p-2" type="submit">
    //                         {editing ? 'Update' : 'Submit'}
    //                     </button>
    //                 </form>
    //             </div>
    //             <div className="mt-4">
    //                 <h2>User List</h2>
    //                 <table className="w-full border">
    //                     <thead>
    //                         <tr>
    //                             <th>ID</th>
    //                             <th>Name</th>
    //                             <th>Email</th>
    //                             <th>Actions</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {users.map((user) => (
    //                             <tr key={user.id}>
    //                                 <td>{user.id}</td>
    //                                 <td>{user.name}</td>
    //                                 <td>{user.gmail}</td>
    //                                 <td>
    //                                     <button
    //                                         className="text-white bg-green-500 p-1 mr-2"
    //                                         onClick={() => {
    //                                             setEditing(user.id);
    //                                             setData(user); // Populate form with user data
    //                                         }}
    //                                     >
    //                                         Edit
    //                                     </button>
    //                                     <button
    //                                         className="text-white bg-red-500 p-1"
    //                                         onClick={() => handleDelete(user.id)}
    //                                     >
    //                                         Delete
    //                                     </button>
    //                                 </td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     );
    // };
    
