"use client";

import { useState, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Predict() {
  const [formData, setFormData] = useState({
    age: 30,
    gender: "0", // Default Female
    heartRate: 70,
    systolic: 120,
    diastolic: 80,
    bloodSugar: 100,
    ckmb: 10,
    troponin: 0.1,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      heartRate: parseFloat(formData.heartRate.toString()),
      systolic: parseFloat(formData.systolic.toString()),
      diastolic: parseFloat(formData.diastolic.toString()),
      bloodSugar: parseFloat(formData.bloodSugar.toString()),
      ckmb: parseFloat(formData.ckmb.toString()),
      troponin: parseFloat(formData.troponin.toString()),
    };

    console.log("Form Submitted", updatedData); // Verifikasi data yang dikirim
    try {
      const response = await axios.post(
        "https://heart-attack-prediction-1lv1.onrender.com/predict",
        updatedData
      );
      console.log("Prediction Result:", response.data.result);

      // Menampilkan SweetAlert2 dengan warna yang sesuai berdasarkan hasil prediksi
      if (response.data.result === "positive") {
        Swal.fire({
          title: "Positive, Risk Detected!",
          text: "You have a high risk of a heart attack. Please consult a doctor immediately.",
          icon: "warning",
          background: "#374151",
          confirmButtonText: "Got it!",
          customClass: {
            popup: "text-white", // Menambahkan kelas CSS untuk mengubah warna teks menjadi putih
            confirmButton: "bg-orange-600 hover:bg-orange-700 text-white",
          },
        });
      } else {
        Swal.fire({
          title: "Negative, No Risk Detected",
          text: "You are at low risk of a heart attack. Keep maintaining a healthy lifestyle!",
          icon: "success",
          background: "#374151",
          confirmButtonText: "Okay!",
          customClass: {
            popup: "text-white", // Menambahkan kelas CSS untuk mengubah warna teks menjadi putih
            confirmButton: "bg-orange-600 hover:bg-orange-700 text-white",
          },
        });
      }
    } catch (error) {
      console.error("Error during prediction!", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error processing your request. Please try again.",
        icon: "error",
        background: "#f8d7da", // Merah muda untuk error
        confirmButtonText: "Retry",
      });
    }
  };

  // Handler to update form data when slider is changed
  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="mt-10 md:mt-0 min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold pt-6 mb-4 text-center text-orange-500">
          Heart Attack Prediction
        </h1>

        <p className="text-md md:text-lg text-justify font-bold text-gray-300 mb-4">
          Disclaimer: The predictions provided by this app are based on data
          input and machine learning models. This tool is not intended to
          replace professional medical advice, diagnosis, or treatment. Always
          consult with a healthcare provider for a comprehensive evaluation and
          personalized medical guidance{" "}
        </p>

        {/* Grid Layout untuk Formulir */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Age Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-200"
            >
              Age: {formData.age}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.age}
              onChange={(e) => handleSliderChange(e, "age")}
              className="w-full"
            />
          </div>
          {/* Gender Input (Slider is not applicable here, so keep dropdown) */}
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
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </div>
          {/* Heart Rate Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="heartRate"
              className="block text-sm font-medium text-gray-200"
            >
              Heart Rate: {formData.heartRate}
            </label>
            <input
              type="range"
              min="20"
              max="140"
              value={formData.heartRate}
              onChange={(e) => handleSliderChange(e, "heartRate")}
              className="w-full"
            />
          </div>
          {/* Systolic Blood Pressure Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="systolic"
              className="block text-sm font-medium text-gray-200"
            >
              Systolic Blood Pressure: {formData.systolic}
            </label>
            <input
              type="range"
              min="60"
              max="230"
              value={formData.systolic}
              onChange={(e) => handleSliderChange(e, "systolic")}
              className="w-full"
            />
          </div>
          {/* Diastolic Blood Pressure Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="diastolic"
              className="block text-sm font-medium text-gray-200"
            >
              Diastolic Blood Pressure: {formData.diastolic}
            </label>
            <input
              type="range"
              min="40"
              max="120"
              value={formData.diastolic}
              onChange={(e) => handleSliderChange(e, "diastolic")}
              className="w-full"
            />
          </div>
          {/* Blood Sugar Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="bloodSugar"
              className="block text-sm font-medium text-gray-200"
            >
              Blood Sugar: {formData.bloodSugar}
            </label>
            <input
              type="range"
              min="40"
              max="425"
              value={formData.bloodSugar}
              onChange={(e) => handleSliderChange(e, "bloodSugar")}
              className="w-full"
            />
          </div>
          {/* CK-MB Input (Slider) */}
          <div className="mb-4">
            <label
              htmlFor="ckmb"
              className="block text-sm font-medium text-gray-200"
            >
              CK-MB: {formData.ckmb}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.01"
              value={formData.ckmb}
              onChange={(e) => handleSliderChange(e, "ckmb")}
              className="w-full"
            />
          </div>
          {/* Troponin Input (Slider) */}
          <div className="mb-6">
            <label
              htmlFor="troponin"
              className="block text-sm font-medium text-gray-200"
            >
              Troponin: {formData.troponin}
            </label>
            <input
              type="range"
              min="0"
              max="0.04"
              step="0.001"
              value={formData.troponin}
              onChange={(e) => handleSliderChange(e, "troponin")}
              className="w-full"
            />
          </div>{" "}
          <div className="md:col-span-2">
            {" "}
            {/* Tombol akan mengambil 2 kolom di layar desktop */}
            <button
              type="submit"
              className="w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Predict
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
