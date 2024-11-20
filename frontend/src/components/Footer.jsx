import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
    return (
        <footer id='footer' white-shadow  className="bg-gray-950 text-white py-8">
            <div className="container mx-auto px-6 ">
                {/* Contact Information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                    {/* Name, Email, WhatsApp Number */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100 mb-4">
                            Contact Information
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100">
                                <strong>NexisparkX</strong>
                            </li>
                            <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:nexisparkx@gmail.com"
                                    className="underline hover:text-green-600 transition-colors"
                                >
                                    nexisparkx@gmail.com
                                </a>
                            </li>
                            <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100">
                                <strong>WhatsApp:</strong>{' '}
                                <a
                                    href="https://wa.me/918989266180"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-green-500"
                                >
                                    +91 89892 66180
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100 mb-4">
                            Follow Us
                        </h3>
                        <div className="flex items-center space-x-6">
                            {/* Instagram Icon */}
                            <a
                                href="https://www.instagram.com/nexisparkx_technologies?igsh=MThpOW5mM3Btb3RiOA=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="w-8 h-8 text-white transition-transform transform hover:scale-110" />
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                href="https://www.linkedin.com/company/nexisparkx-technologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="w-8 h-8 text-white transition-transform transform hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* NexisparkX Div */}
                    <div className="flex flex-col items-center lg:col-span-1">
                        <h3 className="mt-8 font-nunito text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100 mb-4">
                            NexisparkX
                        </h3>
                        <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100">
                            Innovating the Future
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center text-sm">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-gray-100">
                        &copy; {new Date().getFullYear()} NexisparkX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
