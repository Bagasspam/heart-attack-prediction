// app/how-to-use/page.tsx
import React from "react";

const HowToUse = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-12 text-right text-orange-500">
        How to Use
      </h1>
      <div className="max-w-4xl mx-auto text-justify">
        <p className="text-xl mb-6">
          Welcome to the Heart Attack Prediction app! This app uses machine
          learning to predict the likelihood of having a heart attack based on
          various health parameters. Here&#39;s how to use it:
        </p>

        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          Step 1: Fill in Your Health Information
        </h2>
        <p className="text-xl">Enter the following details in the form:</p>
        <ul className="list-disc pl-6 text-xl mb-6  ">
          <li>Age</li>
          <li>Gender</li>
          <li>Heart Rate</li>
          <li>Systolic Blood Pressure</li>
          <li>Diastolic Blood Pressure</li>
          <li>Blood Sugar</li>
          <li>CK-MB</li>
          <li>Troponin</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          Step 2: Submit Your Data
        </h2>
        <p className="text-xl mb-6">
          After filling in your health details, click the &quot;Predict&quot;
          button to get the result. The app will analyze your data and provide
          you with a prediction.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          Step 3: Interpret the Results
        </h2>
        <p className="text-xl mb-6">
          The result will show whether you&#39;re at risk of having a heart
          attack or not. If you get a high-risk prediction, we encourage you to
          consult with a healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
