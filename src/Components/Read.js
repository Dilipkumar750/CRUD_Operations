import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constant';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [apiData, setAPIData] = useState([]);
    const navigate = useNavigate();

    const updateUser = ({ firstname, lastname, checked, id }) => {
        localStorage.setItem('id', id);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('checked', checked);
        navigate('/update');
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            callGetAPI();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const callGetAPI = async () => {
        try {
            const response = await axios.get(API_URL);
            setAPIData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        callGetAPI();
    }, []);

    return (
        <div className="min-h-52 flex items-center justify-center py-8 text-black">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">User List</h1>
                <table className="w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2 text-left">First Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Last Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Checked</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData && apiData.length > 0 ? (
                            apiData.map((data) => (
                                <tr key={data.id} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 px-4 py-2">{data.firstname}</td>
                                    <td className="border border-gray-200 px-4 py-2">{data.lastname}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        {data.checked ? 'Checked' : 'Not Checked'}
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2 text-center">
                                        <button
                                            onClick={() => updateUser(data)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => deleteUser(data.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Read;
