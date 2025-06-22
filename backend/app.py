from flask import Flask, request, jsonify
from flask_cors import CORS  # Mengimpor Flask-CORS
import pandas as pd
import pickle  # Untuk memuat model yang sudah disimpan

app = Flask(__name__)

# Mengaktifkan CORS untuk semua origin
CORS(app, resources={r"/predict": {"origins": "*"}})

# Memuat model yang sudah dilatih dan disimpan dalam file pickle
with open('heart_attack_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Definisikan mapping manual jika label sudah di-encode (misalnya 0 = "Negative", 1 = "Positive")
label_mapping = {0: "Negative", 1: "Positive"}  # Sesuaikan dengan label yang kamu gunakan

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Mengambil data JSON yang dikirimkan dari frontend

    # Debugging: Menampilkan data yang diterima dari frontend
    print("Data yang diterima dari frontend:", data)

    # Ambil data dari request
    age = data['age']
    gender = data['gender']
    heart_rate = data['heartRate']
    systolic = data['systolic']
    diastolic = data['diastolic']
    blood_sugar = data['bloodSugar']
    ckmb = data['ckmb']
    troponin = data['troponin']

    # Membuat DataFrame dari data input dengan nama kolom yang sesuai
    input_data = pd.DataFrame([{
        'Age': age,
        'Gender': gender,
        'Heart rate': heart_rate,
        'Systolic blood pressure': systolic,
        'Diastolic blood pressure': diastolic,
        'Blood sugar': blood_sugar,
        'CK-MB': ckmb,
        'Troponin': troponin
    }])

    # Prediksi hasil
    prediction = model.predict(input_data)[0]  # Melakukan prediksi

    # Decode label dengan mapping manual
    result = label_mapping.get(prediction, "Unknown")  # Menerjemahkan angka ke label asli

    print("Prediksi hasil:", result)

    return jsonify({'result': result})  # Mengembalikan hasil prediksi sebagai JSON


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
