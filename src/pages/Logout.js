import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data (adjust according to your authentication method)
        localStorage.removeItem('user'); // If you're using localStorage to store user data
        sessionStorage.removeItem('user'); // Or sessionStorage

        // Redirect the user to the login page or home page
        navigate('/login');
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Are you sure you want to log out?</h2>
            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 focus:outline-none"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
