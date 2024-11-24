import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert('Please fill out all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            if (error.response) {
                alert(error.response.data.message || 'Login failed');
            } else {
                alert('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className={`w-full p-3 bg-blue-500 text-white font-semibold rounded-md ${loading ? 'opacity-50' : 'hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
