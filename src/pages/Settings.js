import React, { useState } from 'react';

const Settings = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Add your API request here to update the user details
            // For now, simulate a successful submission
            console.log('Settings updated:', formData);
            alert('Settings updated successfully!');
        } catch (error) {
            console.error('Error updating settings:', error);
            alert('Error updating settings. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Account Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">New Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter new password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className={`bg-blue-600 text-white px-6 py-2 rounded-md focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
                        disabled={loading}
                    >
                        {loading ? 'Updating...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
