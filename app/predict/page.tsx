"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Predict() {
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
        // "http://localhost:5000/predict", // Ganti dengan URL endpoint API Anda
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
          background: "#374151", // Merah untuk hasil negatif
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

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-row justify-center items-center">
      <div className="flex-1 w-55 flex flex-col">
        <h1 className="text-8xl text-right font-bold text-orange-500 mb-4">
          Heart Attack Prediction
        </h1>

        <p className="text-2xl text-right font-bold text-gray-300 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          temporibus dolorum similique accusamus velit quidem architecto magnam
          quasi quod ipsum placeat blanditiis voluptatem, inventore et quos
          repudiandae vitae exercitationem totam?
        </p>
      </div>

      <div className="flex-1  flex flex-col justify-center items-center ">
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
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, ckmb: e.target.value })
              }
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
            className="w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Predict
          </button>
        </form>
      </div>
    </div>
  );
}
