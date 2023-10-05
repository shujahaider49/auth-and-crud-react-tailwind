import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiLoader3Fill } from 'react-icons/ri';
import Fade from 'react-reveal';
import Navbar from './Navbar';
import UserTableRow from './UserTableRow';

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const editedUser = {
    name: '',
    password: 'NewPassword123',
    role: '',
    status: 'Updated Status',
  };
  

  useEffect(() => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTYzMTU0OTgsImV4cCI6MTY5NjY2MTA5OH0.fMsjbosQM11JGdxt_Y21NsYOTGyoqROXgTKFD2iZKjg'; // Replace with your actual authorization token
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    axios.get('http://localhost:5000/api/admin/all-user', { headers })
      .then((response) => {
        console.log('Response data from API:', response.data);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleEdit = (editedUser) => {
    // console.log('Edited User:', editedUser);
      console.log('handleEdit function called with editedUser:', editedUser);

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTYzMTU0OTgsImV4cCI6MTY5NjY2MTA5OH0.fMsjbosQM11JGdxt_Y21NsYOTGyoqROXgTKFD2iZKjg';
    const headers = {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };

    axios.put(`http://localhost:5000/api/update-profile/${editedUser}`, editedUser, { headers })
    .then((response) => {
      console.log('Response MY API:', response.data);
      const updatedUsers = users.map((user) => (user._id === editedUser._id ? response.data : user));
      setUsers(updatedUsers);
    })
    .catch((error) => {
      console.error('Error updating user data:', error);
    });

  };

  const handleDelete = (userId) => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTYzMTU0OTgsImV4cCI6MTY5NjY2MTA5OH0.fMsjbosQM11JGdxt_Y21NsYOTGyoqROXgTKFD2iZKjg';
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    const confirmDelete = window.confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      axios.delete(`http://localhost:5000/api/admin/delete/${userId}`, { headers })
        .then(() => {
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white">
        <div className="overflow-x-auto">
          <Fade bottom>
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-cyan-600 text-center">
              User List
            </h1>
            <table className="min-w-full sm:min-w-0 text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Serial No
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Name
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Role
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Email
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Status
                  </th>
                  <th scope="col" className="px-2 sm:px-6 py-2 sm:py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserTableRow
                    key={user._id}
                    user={user}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    serialNo={index + 1}
                  />
                ))}
              </tbody>
            </table>
          </Fade>
        </div>

        {users.length === 0 && (
          <div className="min-h-screen flex justify-center items-center">
            <p className="text-center">
              <RiLoader3Fill className="animate-spin fill-info text-5xl" />
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default UserList;