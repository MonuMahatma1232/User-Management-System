import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen text-white">
            <div className="flex flex-col items-center justify-center py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
                    Welcome to Your Personal User Management System!
                </h1>
                <p className="text-xl md:text-2xl text-center mb-8">
                    Simplify your user management with a seamless experience. Create an account or log in to start.
                </p>

                <div className="flex gap-6">
                    <button
                        className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
                        onClick={() => window.location.href = '/register'}
                    >
                        Register
                    </button>
                    <button
                        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
                        onClick={() => window.location.href = '/login'}
                    >
                        Login
                    </button>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Step 1: Register</h3>
                            <p className="text-base">
                                Create your account to begin managing users effectively.
                            </p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Step 2: Login</h3>
                            <p className="text-base">
                                Securely log in to access your user management dashboard.
                            </p>
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Step 3: Manage</h3>
                            <p className="text-base">
                                Easily add, edit, or delete users within your system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
