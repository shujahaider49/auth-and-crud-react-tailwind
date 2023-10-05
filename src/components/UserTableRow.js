import React, { useState } from 'react';
import { FaRegEdit, FaSave } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const UserTableRow = ({ user, onEdit, onDelete, serialNo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEdit(editedUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">{serialNo}</td>
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
        {isEditing ? (
          <input
            type="text"
            name="name"
            className="text-black"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        ) : (
          user.name
        )}
      </td>
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
        {isEditing ? (
          <input
            type="text"
            name="role"
            className="text-black"
            value={editedUser.role}
            onChange={handleInputChange}
          />
        ) : (
          user.role
        )}
      </td>
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
        {isEditing ? (
          <input
            type="text"
            name="email"
            className="text-black"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        ) : (
          user.email
        )}
      </td>
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
        {isEditing ? (
          <input
            type="text"
            name="status"
            className="text-black"
            value={editedUser.status}
            onChange={handleInputChange}
          />
        ) : (
          user.status
        )}
      </td>
      <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
        {isEditing ? (
          <button onClick={handleSaveClick} className="text-green-500 hover:underline text-sm sm:text-lg">
            <FaSave />
          </button>
        ) : (
          <button onClick={handleEditClick} className="text-blue-500 hover:underline mr-2 text-sm sm:text-lg">
            <FaRegEdit />
          </button>
        )}
        <button onClick={() => onDelete(user._id)} className="text-red-500 hover:underline text-sm sm:text-lg">
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
