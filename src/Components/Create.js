import React, { useState } from 'react';
import { API_URL } from "../constant";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
        await axios.post(API_URL, {
            firstname,
            lastname,
            checked,
        });
        navigate('/read');
    };

    return (
        <div className="min-h-50  flex items-center justify-center text-black">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Create User
                </h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={firstname}
                            onChange={(event) => setFirstName(event.target.value)}
                            placeholder="Enter First Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            value={lastname}
                            onChange={(event) => setLastName(event.target.value)}
                            placeholder="Enter Last Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                        />
                        <label className="ml-2 text-gray-700">
                            Agree to the Terms & Conditions
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={postData}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
