# UrbanPulse
# 🌆 UrbanPulse – Smart City Sustainability Dashboard

UrbanPulse is a web-based dashboard that helps users explore important sustainability indicators of cities such as **Air Quality, Traffic, Government Schemes, Energy Data, and Community Resources**.
The platform allows users to select a city and view different modules that visualize environmental and urban data.

---

## 🚀 Features

### 🏙 City Selection

Users can select their city from the homepage.
The selected city is stored using **LocalStorage** and used across all modules.

### 🌫 City Health

Displays environmental information of the selected city:

* Weather data
* AQI (Air Quality Index)
* Green area statistics

Data is fetched using public APIs.

---

### ⚡ Energy Nexus

Provides insights related to energy usage and sustainability initiatives in the city.

---

### 🚦 Traffic Map

Shows real-time traffic layers using **OpenStreetMap + Leaflet**.

Features:

* Interactive map
* Traffic visualization
* Major traffic points listed for the selected city

---

### 🌱 Sustainability Schemes

Displays schemes related to sustainability categorized as:

* Government
* NGO
* Private

Each city shows its own set of schemes.

Example:

* Pune S1
* Pune S2
* Pune S3
* Pune S4
* Pune S5

---

### 🤝 Neighbour Corner

Community interaction module where users can:

* Share resources
* Offer help
* Request items

Includes resource cards and a resource-sharing form.

---

## 🛠 Technologies Used

Frontend:

* HTML5
* CSS3
* JavaScript

Libraries / APIs:

* OpenWeatherMap API (Weather Data)
* AQI API (Air Quality Data)
* OpenStreetMap + Leaflet (Maps)
  (In Future We will use Google Maps for the Accurate Prediction)
* LocalStorage (City persistence)

---

## 📂 Project Structure

```
UrbanPulse
│
├── index.html
├── city-health.html
├── energy-nexus.html
├── schemes.html
├── traffic.html
├── neighbour.html
│
├── css
│   └── style.css
│
├── js
│   ├── main.js
│   ├── city-health.js
│   ├── energy-charts.js
│   └── neighbour.js
|   
│
└── README.md
```

---

## ⚙️ Setup Instructions

1. Clone the repository

```
git clone https://github.com/your-username/urbanpulse.git
```

2. Open the project folder.

3. Add your API keys inside the JavaScript files:

Example:

```
const API_KEY = "YOUR_API_KEY";
```

4. Run the project by opening:

```
index.html
```

in your browser.

---

## 🌍 How It Works

1. User selects a city from the homepage.
2. The city is saved in **LocalStorage**.
3. All modules fetch data based on the selected city.
4. Users can explore sustainability information and community features.

---

## 🎯 Future Improvements

* Real-time traffic congestion prediction
* Smart energy consumption analytics
* Citizen reporting system
* City comparison dashboard
* AI-based sustainability recommendations

---

## 👨‍💻 Authors

**Yash** **Khengare**
FY BCA Student, Sri Balaji University

**Shrikrishna** **Dhumal**
FY BCA Student, Sri Balaji University

**Harshita** **Kuwar**
FY BCA Student, Sri Balaji University

**Aarya** **Shinde**
FY BCA Student, Sri Balaji University

---

## 📜 License

This project is developed for **learning, hackathons, and educational purposes**.
