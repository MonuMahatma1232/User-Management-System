const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base font-light">
                    &copy; {new Date().getFullYear()} User Management System. All rights reserved.
                </p>
                
                <div className="mt-4 flex justify-center gap-6">
                    <a
                        href="/privacy-policy"
                        className="text-xs md:text-sm hover:underline transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Privacy Policy
                    </a>
                    <span className="text-xs md:text-sm text-gray-400">|</span>
                    <a
                        href="/terms-of-service"
                        className="text-xs md:text-sm hover:underline transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Terms of Service
                    </a>
                </div>

                <div className="mt-4">
                    <p className="text-xs md:text-sm">
                        Stay connected with us for updates!
                    </p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <a
                            href="https://www.facebook.com"
                            className="text-xl hover:text-blue-500 transition duration-300"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="text-xl hover:text-blue-400 transition duration-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            className="text-xl hover:text-blue-700 transition duration-300"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
