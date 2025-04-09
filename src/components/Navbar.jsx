import { Link } from 'react-router-dom'
import React from 'react'

function Navbar({ isTokenPage = false }) {
    return (
        <header className="w-full py-4 px-6">
            <nav className="w-[60%] mx-auto bg-white rounded-2xl shadow-md flex justify-between items-center px-8 py-4">
                {/* Logo com hover */}
                <Link
                    to="/"
                    className="flex items-center space-x-3 transition-transform duration-300 hover:scale-110"
                >
                    <img
                        src="/assets/sentra-logo.png"
                        alt="SentraAI Logo"
                        className="w-8 h-8 rounded"
                    />
                    <span className="font-semibold text-lg text-gray-900">SentraAI</span>
                </Link>

                {/* Menu com condição */}
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                    {isTokenPage ? (
                        <>
                            <Link
                                to="/"
                                className="hover:text-blue-600 hover:underline transition duration-200"
                            >
                                Home
                            </Link>
                            <a
                                href="#social"
                                className="hover:text-blue-600 hover:underline transition duration-200"
                            >
                                Social Media
                            </a>
                        </>
                    ) : (
                        <>
                            <a
                                href="#social"
                                className="hover:text-blue-600 hover:underline transition duration-200"
                            >
                                Social Media
                            </a>
                            <a
                                href="#documentation"
                                className="hover:text-blue-600 hover:underline transition duration-200"
                            >
                                Documentation
                            </a>
                        </>
                    )}

                    <a
                        href="#"
                        className="hover:text-blue-600 hover:underline transition duration-200"
                    >
                        
                    </a>
                </div>

                {/* Botão $SentraAi */}
                <Link
                    to="/token"
                    className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition transform hover:scale-105 hover:bg-gray-900"
                >
                    $SentraAI
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
