import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome to the Dashboard!</h2>
                    <p className="mt-4 text-gray-600">Here you can manage users, view reports, and handle other system functionalities.</p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Dashboard Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-700">Manage Users</h3>
                        <p className="mt-2 text-gray-500">Add, remove, or modify user information.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Users</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
                        <p className="mt-2 text-gray-500">View detailed reports of user activity and system usage.</p>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">View Reports</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-700">Settings</h3>
                        <p className="mt-2 text-gray-500">Configure system settings and preferences.</p>
                        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Go to Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
