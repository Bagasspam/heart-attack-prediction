from flask import Flask, request, jsonify
from flask_cors import CORS  # Mengimpor Flask-CORS
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.utils.class_weight import compute_class_weight

app = Flask(__name__)

# Mengaktifkan CORS untuk semua origin
CORS(app, resources={r"/predict": {"origins": "*"}})

# Load dataset dan latih model
df = pd.read_csv('Medicaldataset_cleaned_final.csv')

label_encoder = LabelEncoder()
df['Result_encoded'] = label_encoder.fit_transform(df['Result'])
X = df.drop(columns=['Result', 'Result_encoded'])
y = df['Result_encoded']

# Menghitung bobot kelas jika ada ketidakseimbangan kelas
class_weights = compute_class_weight('balanced', classes=[0, 1], y=y)
class_weight_dict = {0: class_weights[0], 1: class_weights[1]}

# Melatih model RandomForest dengan bobot kelas
model = RandomForestClassifier(n_estimators=100, class_weight=class_weight_dict)
model.fit(X, y)

# Mengevaluasi model menggunakan cross-validation
cv_scores = cross_val_score(model, X, y, cv=5)
print("Cross-validation scores:", cv_scores)
print("Mean accuracy:", cv_scores.mean())

# Route untuk prediksi
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
    prediction = model.predict(input_data)[0]
    result = label_encoder.inverse_transform([prediction])[0]

    print("Prediksi hasil:", result)

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
