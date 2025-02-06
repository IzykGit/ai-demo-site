import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">Calorie Tracker</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#features" className="text-gray-600 hover:text-gray-800 transition cursor-pointer">Features</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-800 transition cursor-pointer">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-800 transition cursor-pointer">Contact</a>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
                            Sign In
                        </button>
                        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header