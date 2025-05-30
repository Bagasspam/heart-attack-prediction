import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mt-1 md:mt-0 w-full min-h-screen bg-gray-800 text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-orange-500">
          Welcome to Heart Attack Prediction App
        </h1>

        <p className="text-lg md:text-xl mb-3 text-justify">
          This application helps predict the risk of heart attacks based on your
          health parameters. With the help of advanced machine learning models,
          it provides valuable insights to take better care of your heart
          health.
        </p>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-2">
            How It Works
          </h2>
          <p className="text-lg md:text-xl mb-6">
            To get started, enter your health data (age, blood pressure, heart
            rate, etc.) into the prediction form and get an estimate of your
            heart attack risk.
          </p>
          <Link
            href="/predict"
            className="bg-orange-600 hover:bg-orange-500 text-white text-lg md:text-xl font-bold px-8 py-5 rounded-md"
          >
            Start Prediction Now
          </Link>
        </div>

        <div className="max-w-4xl mx-auto mt-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-2">
            Why Use This App?
          </h3>
          <ul className="list-disc pl-8 text-lg md:text-xl">
            <li>Quick, easy-to-use interface</li>
            <li>Accurate risk prediction based on your health data</li>
            <li>Helps raise awareness about heart health</li>
            <li>Provides actionable insights for better lifestyle decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
