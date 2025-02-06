import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Calorie Tracker</div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-800 transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-800 transition">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Sign In
            </button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Track Your Calories, Transform Your Life
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Easily log your daily meals and get personalized insights to help you reach your health goals.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Easy Logging</h2>
              <p className="text-gray-600">
                Quickly record your meals with an intuitive and simple interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Detailed Analytics</h2>
              <p className="text-gray-600">
                Visualize your calorie intake trends and stay on track with insightful data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Personalized Goals</h2>
              <p className="text-gray-600">
                Set and monitor your personal fitness targets tailored to your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Calorie Tracker. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
