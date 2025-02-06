import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="bg-white border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Calorie Tracker. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition">Privacy Policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;