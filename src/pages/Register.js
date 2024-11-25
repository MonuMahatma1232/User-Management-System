import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            alert('Please fill out all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto p-6 space-y-4">
            <h2 className="text-2xl font-bold">Register</h2>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded">
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};

export default Register;
