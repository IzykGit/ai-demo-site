import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container mx-auto px-4 py-20 flex flex-col items-center">
            {/* Text Column */}
            <div className="w-full text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Track Your Calories, Transform Your Life
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Easily log your daily meals and get personalized insights to help you reach your health goals.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="cursor-pointer px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition">
                  Get Started
                </button>
                <button className="cursor-pointer px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Features That Empower You
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 20a10 10 0 100-20 10 10 0 000 20zm-1-15a1 1 0 112 0v4a1 1 0 01-2 0V5zm-1 7a1 1 0 112 0v2a1 1 0 01-2 0v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Easy Logging
                </h3>
                <p className="text-gray-600">
                  Quickly record your meals with an intuitive and user-friendly interface.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h1V5a1 1 0 011-1h2a1 1 0 011 1v5h1a1 1 0 110 2h-1v5a1 1 0 11-2 0v-5H6v5a1 1 0 11-2 0v-5H3a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Detailed Analytics
                </h3>
                <p className="text-gray-600">
                  Visualize your calorie intake trends and gain insights to stay on track.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 106 0 3 3 0 00-6 0zm-1 0a4 4 0 118 0 4 4 0 01-8 0z" />
                    <path d="M2 13a6 6 0 0112 0v1H2v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Personalized Goals
                </h3>
                <p className="text-gray-600">
                  Set custom health targets and track your progress in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Step 1 */}
              <div className="w-full md:w-1/3 text-center">
                <div className="mb-4">
                  <span className="inline-flex bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center font-bold">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sign Up
                </h3>
                <p className="text-gray-600">
                  Create an account and set up your profile in minutes.
                </p>
              </div>
              {/* Step 2 */}
              <div className="w-full md:w-1/3 text-center">
                <div className="mb-4">
                  <span className="inline-flex bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center font-bold">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Log Meals
                </h3>
                <p className="text-gray-600">
                  Easily log your meals and snacks throughout the day.
                </p>
              </div>
              {/* Step 3 */}
              <div className="w-full md:w-1/3 text-center">
                <div className="mb-4">
                  <span className="inline-flex bg-blue-500 text-white rounded-full w-12 h-12 items-center justify-center font-bold">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Get Insights
                </h3>
                <p className="text-gray-600">
                  Monitor your progress with real-time analytics and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join Calorie Tracker today and start your journey to a healthier lifestyle.
            </p>
            <button className="cursor-pointer px-8 py-4 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100 transition">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
