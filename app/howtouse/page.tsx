import React from "react";

const HowToUse = () => {
  return (
    <div className="mt-10 md:mt-0 w-full min-h-screen bg-gray-800 text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2 ">
        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4 text-center text-orange-500">
          How to Use
        </h1>
        <div className="max-w-4xl mx-auto text-justify">
          <p className="text-lg md:text-xl mb-3">
            Welcome to the Heart Attack Prediction app! This app uses machine
            learning to predict the likelihood of having a heart attack based on
            various health parameters. Here's how to use it:
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-400">
            Step 1: Fill in Your Health Information
          </h2>
          <p className="text-lg md:text-xl mb-2">
            Enter the following details in the form:
          </p>
          <ul className="list-disc pl-6 text-lg md:text-xl mb-3">
            <li>Age (0-100)</li>
            <li>Gender (Male or Female)</li>
            <li>Heart Rate (20-135)</li>
            <li>Systolic Blood Pressure (65-130)</li>
            <li>Diastolic Blood Pressure (40-120)</li>
            <li>Blood Sugar (40-425)</li>
            <li>CK-MB (0-10)</li>
            <li>Troponin (0-0,04)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
            Step 2: Submit Your Data
          </h2>
          <p className="text-lg md:text-xl mb-3">
            After filling in your health details, click the "Predict" button to
            get the result. The app will analyze your data and provide you with
            a prediction.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-400">
            Step 3: Interpret the Results
          </h2>
          <p className="text-lg md:text-xl mb-3">
            The result will show whether you're at risk of having a heart attack
            or not. If you get a high-risk prediction, we encourage you to
            consult with a healthcare professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
