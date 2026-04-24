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

* **Weather data** - Fetched from OpenWeatherMap API
* **AQI (Air Quality Index)** - Calculated from PM2.5 data using EPA breakpoints, with OpenWeatherMap air pollution API and WAQI fallback
* **Green area statistics** - Local database of parks, forests, and oxygen sources per city

Data is fetched using public APIs with fallback mechanisms.

---

### ⚡ Energy Nexus

Provides insights related to energy usage and sustainability initiatives in the city.

Features:
* **Energy mix visualization** - Doughnut chart showing solar, wind, hydro, thermal energy distribution
* **Water usage tracking** - Line chart displaying weekly water consumption patterns
* **Waste management** - Bar chart showing waste generation, recycling, and landfill statistics

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

Each city shows its own set of schemes with advanced filtering by:
* Budget range
* Timeline (immediate, 6 months, 1 year, 2+ years)
* Impact level (low, medium, high)

Example:

* Pune S1
* Pune S2
* Pune S3
* Pune S4
* Pune S5

---

### 🤝 Neighbour Corner

Community interaction module where users can:

* **Emergency contacts** - Police, ambulance, fire, disaster management, traffic police, helpline, utilities, animal welfare
* **Resource sharing** - Share resources, offer help, request items
* **Contact cards** - Direct calling and number copying functionality

Includes resource cards and a resource-sharing form.

---

### 🔍 Global Search

Search across all UrbanPulse content:

* Sustainability schemes
* Green areas
* Locations
* Emergency contacts

---

### 🛠 Sustainability Tools

Comprehensive sustainability utilities:

* **Carbon Calculator** - Calculate personal carbon footprint from electricity, gas, fuel, and waste usage
* **Energy Audit** - Assess home energy efficiency based on building age, insulation, and electricity bills
* **Waste Sorting Guide** - Identify waste categories and disposal methods for common items
* **Sustainable Shopping** - Find eco-friendly products by category and certification

---

## 🛠 Technologies Used

Frontend:

* HTML5
* CSS3
* JavaScript (ES6+)
* Chart.js (for data visualization)

Libraries / APIs:

* **OpenWeatherMap API** (Weather Data & Air Pollution)
* **WAQI API** (Air Quality fallback)
* **OpenStreetMap + Leaflet** (Maps)
  (In Future We will use Google Maps for the Accurate Prediction)
* **LocalStorage** (City persistence & user preferences)

---

## 📂 Project Structure

```
UrbanPulse
│
├── index.html                    # Landing page & city selection
├── city-health.html              # City health dashboard
├── energy-nexus.html             # Energy & resource visualization
├── schemes.html                  # Sustainability schemes & filters
├── traffic.html                  # Traffic map interface
├── neighbour.html                # Community resources & emergency contacts
├── search.html                   # Global search interface
├── sustainability.html           # Sustainability tools & calculators
├── navbar.html                   # Shared navigation component
│
├── css/
│   └── style.css                 # Global styling & responsive design
│
├── js/
│   ├── main.js                   # City selection & navigation logic
│   ├── city-health.js            # Weather & AQI API integration
│   ├── energy-charts.js          # Chart.js visualizations
│   ├── neighbour.js              # Emergency contacts & community features
│   ├── search.js                 # Global search functionality
│   ├── sustainability.js         # Sustainability tools logic
│   └── schemes.js                # Schemes filtering & display
│
└── README.md
```

---

## ⚙️ Setup Instructions

1. Clone the repository

```
git clone https://github.com/Yash9860Kh/urbanpulse.git
```

2. Open the project folder.

3. Add your API keys inside the JavaScript files:

**Required APIs:**
- OpenWeatherMap API Key (for weather and air pollution data)
- WAQI API Token (for AQI fallback)

Example in `js/city-health.js`:

```javascript
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const aqiToken = "YOUR_WAQI_API_TOKEN";
```

4. Run the project by opening:

```
index.html
```

in your browser.

> **Note:** For API calls to work properly, run from a local server:
> ```bash
> python -m http.server 8000
> ```
> Then open `http://localhost:8000/index.html`

---

## 🌍 How It Works

1. User selects a city from the homepage.
2. The city is saved in **LocalStorage**.
3. All modules fetch data based on the selected city using:
   - **Weather**: OpenWeatherMap current weather API
   - **AQI**: OpenWeatherMap air pollution API → WAQI fallback
   - **Green Areas**: Local city-specific database
   - **Emergency Contacts**: City-specific contact database
   - **Charts**: Static sample data with Chart.js
   - **Sustainability Tools**: Local calculation algorithms
4. Users can explore sustainability information and community features.

---

## 🎯 Future Improvements

* Real-time traffic congestion prediction
* Smart energy consumption analytics
* Citizen reporting system
* City comparison dashboard
* AI-based sustainability recommendations
* User authentication and personalized dashboards
* Dynamic city data from backend APIs
* Mobile app version
* Offline functionality

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
