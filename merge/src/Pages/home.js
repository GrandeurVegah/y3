import React from "react";
import { useAuth } from "../componets/Auth";
export default function Home() {
  const { currentUser } = useAuth();

  function userDetails() {
    if (currentUser) {
      return (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-2">Welcome Back!</h2>
          <div className="text-gray-700">
            <span className="font-semibold">Email:</span> {currentUser.email}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Market Insight</h1>
          <p className="mt-2 text-lg">
            Empowering Retail Investors with Sentiment Analysis
          </p>
        </div>
      </header>

      {/* User Details Section */}
      {userDetails()}


      <main className="container mx-auto mt-8 p-4">
        {/* About the Project Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Project</h2>
          <p className="text-gray-700">
            This project leverages cutting-edge natural language processing technology to provide retail investors with the same insights and advantages typically reserved for institutional investors. By making sophisticated sentiment analysis accessible, we aim to empower individual investors to navigate volatile markets with confidence.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="bg-gray-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Financial Data Aggregation</h3>
              <p className="text-gray-700">Combine and analyze data from multiple sources to get a comprehensive view of the market.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Real-time Market Data</h3>
              <p className="text-gray-700">Access up-to-the-minute data to stay informed of market changes as they happen.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Automated Ratio Calculations</h3>
              <p className="text-gray-700">Instantly calculate important financial ratios to help you make informed investment decisions.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">User-Friendly Interface</h3>
              <p className="text-gray-700">Designed to be intuitive and easy-to-use for investors at all experience levels.</p>
            </div>
          </div>
        </section>
        {/* Coming Soon Section */}
        <section className="bg-blue-50 rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-700">
            Stay tuned for exciting new natural language processing technology that will further enhance your investment experience.
          </p>
        </section>
      </main>
    </div>
  );
}