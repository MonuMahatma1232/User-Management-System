import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or brand name */}
                <div className="text-xl font-bold">
                    <a href="/" className="hover:text-blue-400 transition duration-300">User Management</a>
                </div>

                {/* Hamburger Icon for mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navbar Links */}
                <ul className={`lg:flex space-x-6 text-lg ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <li>
                        <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard" className="hover:text-blue-400 transition duration-300">Dashboard</a>
                    </li>
                    <li>
                        <a href="/profile" className="hover:text-blue-400 transition duration-300">Profile</a>
                    </li>
                    <li>
                        <a href="/settings" className="hover:text-blue-400 transition duration-300">Settings</a>
                    </li>
                    <li>
                        <a href="/login" className="hover:text-blue-400 transition duration-300">Login</a>
                    </li>
                    <li>
                        <a href="/register" className="hover:text-blue-400 transition duration-300">Register</a>
                    </li>
                    <li>
                        <a href="/logout" className="hover:text-red-400 transition duration-300">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
