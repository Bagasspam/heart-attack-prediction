import React from "react";

const About = () => {
  return (
    <div className="mt-0 md:mt-0 w-full min-h-screen bg-gray-800 text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-0 text-center text-orange-500">
          About Heart Attack Prediction App
        </h1>

        <div className="max-w-4xl mx-auto text-justify">
          <p className="text-lg md:text-xl mx-6 mb-3">
            The goal of this app is to make heart health monitoring more
            accessible and easier for everyone. By leveraging the power of data
            and machine learning, we aim to empower individuals to make more
            informed decisions about their health.
          </p>
          <p className="text-lg md:text-xl mx-6">
            With this app, you can easily predict your heart attack risk based
            on your health data, such as blood pressure, age, and other risk
            factors. We focus on simplicity and reliable results, helping you
            take proactive steps to maintain a healthy heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
