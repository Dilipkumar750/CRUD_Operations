import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constant';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState('');
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [checked, setChecked] = useState(false); // Ensure this is boolean

    const updateUser = async () => {
        try {
            await axios.put(`${API_URL}/${id}`, {
                firstname,
                lastname,
                checked,
            });
            navigate('/read');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    useEffect(() => {
        setId(localStorage.getItem('id') || '');
        setFirstname(localStorage.getItem('firstname') || '');
        setLastname(localStorage.getItem('lastname') || '');
        setChecked(localStorage.getItem('checked') === 'true'); // Convert string to boolean
    }, []);

    return (
        <div className="min-h-52 flex items-center justify-center text-black">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Update User</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">First Name</label>
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Enter First Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Enter Last Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            className="h-5 w-5 text-blue-600"
                        />
                        <label className="ml-2 text-gray-700">Agree to Terms & Conditions</label>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={updateUser}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
