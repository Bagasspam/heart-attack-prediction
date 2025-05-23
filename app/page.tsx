"use client";
import { useState, FormEvent } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    heartRate: "",
    systolic: "",
    diastolic: "",
    bloodSugar: "",
    ckmb: "",
    troponin: "",
  });
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      heartRate: parseFloat(formData.heartRate),
      systolic: parseFloat(formData.systolic),
      diastolic: parseFloat(formData.diastolic),
      bloodSugar: parseFloat(formData.bloodSugar),
      ckmb: parseFloat(formData.ckmb),
      troponin: parseFloat(formData.troponin),
    };

    console.log("Form Submitted", updatedData); // Verifikasi data yang dikirim
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        updatedData
      );
      console.log("Prediction Result:", response.data.result);
      setPrediction(response.data.result);
    } catch (error) {
      console.error("Error during prediction!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center py-8">
      <h1 className="text-4xl font-semibold text-blue-400 mb-8">
        Heart Attack Prediction
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Age Input */}
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-200"
          >
            Age
          </label>
          <input
            type="number" // Menangani angka
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
          />
        </div>

        {/* Gender Input */}
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-200"
          >
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>

        {/* Heart Rate Input */}
        <div className="mb-4">
          <label
            htmlFor="heartRate"
            className="block text-sm font-medium text-gray-200"
          >
            Heart Rate
          </label>
          <input
            type="number" // Menangani angka
            name="heartRate"
            placeholder="Heart Rate"
            value={formData.heartRate}
            onChange={(e) =>
              setFormData({ ...formData, heartRate: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        {/* Systolic Blood Pressure Input */}
        <div className="mb-4">
          <label
            htmlFor="systolic"
            className="block text-sm font-medium text-gray-200"
          >
            Systolic Blood Pressure
          </label>
          <input
            type="number" // Menangani angka
            name="systolic"
            placeholder="Systolic Blood Pressure"
            value={formData.systolic}
            onChange={(e) =>
              setFormData({ ...formData, systolic: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        {/* Diastolic Blood Pressure Input */}
        <div className="mb-4">
          <label
            htmlFor="diastolic"
            className="block text-sm font-medium text-gray-200"
          >
            Diastolic Blood Pressure
          </label>
          <input
            type="number" // Menangani angka
            name="diastolic"
            placeholder="Diastolic Blood Pressure"
            value={formData.diastolic}
            onChange={(e) =>
              setFormData({ ...formData, diastolic: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        {/* Blood Sugar Input */}
        <div className="mb-4">
          <label
            htmlFor="bloodSugar"
            className="block text-sm font-medium text-gray-200"
          >
            Blood Sugar
          </label>
          <input
            type="number" // Menangani angka
            name="bloodSugar"
            placeholder="Blood Sugar"
            value={formData.bloodSugar}
            onChange={(e) =>
              setFormData({ ...formData, bloodSugar: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        {/* CK-MB Input */}
        <div className="mb-4">
          <label
            htmlFor="ckmb"
            className="block text-sm font-medium text-gray-200"
          >
            CK-MB
          </label>
          <input
            type="number" // Menangani angka
            name="ckmb"
            placeholder="CK-MB"
            value={formData.ckmb}
            onChange={(e) => setFormData({ ...formData, ckmb: e.target.value })}
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        {/* Troponin Input */}
        <div className="mb-6">
          <label
            htmlFor="troponin"
            className="block text-sm font-medium text-gray-200"
          >
            Troponin
          </label>
          <input
            type="number" // Menangani angka
            name="troponin"
            placeholder="Troponin"
            value={formData.troponin}
            onChange={(e) =>
              setFormData({ ...formData, troponin: e.target.value })
            }
            className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
            required
            min="0"
            step="any" // Memungkinkan desimal
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Predict
        </button>
      </form>
      {prediction && (
        <p className="text-center mt-4 text-lg font-semibold text-green-400">
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
}
