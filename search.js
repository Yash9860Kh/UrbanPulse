// Global Search Functionality for UrbanPulse

// Combined data from all sections
const searchData = {
    schemes: {
        Pune: [
            {name:"Pune S1 Solar Homes", type:"gov", date:"30 Aug", budget:50000000, timeline:"6 months", impact:"High", description:"Residential solar panel installation program for homes", category: "schemes"},
            {name:"Pune S2 Green Transport", type:"ngo", date:"12 Sept", budget:15000000, timeline:"3 months", impact:"Medium", description:"Electric vehicle promotion and green transport initiatives", category: "schemes"},
            {name:"Pune S3 Water Saving", type:"private", date:"5 Oct", budget:8000000, timeline:"1 year", impact:"Medium", description:"Smart irrigation systems and water conservation programs", category: "schemes"},
            {name:"Pune S4 Clean Streets", type:"gov", date:"20 Sept", budget:25000000, timeline:"6 months", impact:"High", description:"Street cleaning and waste management improvement", category: "schemes"},
            {name:"Pune S5 Tree Boost", type:"ngo", date:"10 Oct", budget:12000000, timeline:"1 year", impact:"High", description:"Urban tree plantation and green space development", category: "schemes"}
        ],
        Mumbai: [
            {name:"Mumbai S1 Solar Homes", type:"gov", date:"25 Aug", budget:75000000, timeline:"1 year", impact:"High", description:"Large-scale solar installation for residential and commercial buildings", category: "schemes"},
            {name:"Mumbai S2 Coastal Clean", type:"ngo", date:"15 Sept", budget:20000000, timeline:"6 months", impact:"High", description:"Beach and coastal area cleaning and protection programs", category: "schemes"},
            {name:"Mumbai S3 Smart Drainage", type:"private", date:"2 Oct", budget:35000000, timeline:"1 year", impact:"High", description:"Advanced drainage systems to prevent flooding", category: "schemes"},
            {name:"Mumbai S4 EV Promotion", type:"gov", date:"18 Sept", budget:40000000, timeline:"6 months", impact:"Medium", description:"Electric vehicle infrastructure and awareness campaigns", category: "schemes"},
            {name:"Mumbai S5 Mangrove Protection", type:"ngo", date:"28 Sept", budget:18000000, timeline:"2 years", impact:"High", description:"Mangrove restoration and coastal ecosystem protection", category: "schemes"}
        ],
        Delhi: [
            {name:"Delhi S1 Solar Homes", type:"gov", date:"30 Aug", budget:60000000, timeline:"6 months", impact:"High", description:"Solar panel installation for homes and apartments", category: "schemes"},
            {name:"Delhi S2 Air Quality Drive", type:"ngo", date:"12 Sept", budget:30000000, timeline:"1 year", impact:"High", description:"Air pollution reduction and clean air initiatives", category: "schemes"},
            {name:"Delhi S3 Smart Water", type:"private", date:"3 Oct", budget:22000000, timeline:"6 months", impact:"Medium", description:"Smart water management and conservation systems", category: "schemes"},
            {name:"Delhi S4 Green Schools", type:"gov", date:"15 Sept", budget:15000000, timeline:"3 months", impact:"Medium", description:"Green infrastructure development in educational institutions", category: "schemes"},
            {name:"Delhi S5 Tree Shield", type:"ngo", date:"10 Oct", budget:25000000, timeline:"1 year", impact:"High", description:"Urban forestation and heat island reduction programs", category: "schemes"}
        ],
        Bangalore: [
            {name:"Bangalore S1 Solar Homes", type:"gov", date:"28 Aug", budget:55000000, timeline:"6 months", impact:"High", description:"Solar energy adoption program for residential buildings", category: "schemes"},
            {name:"Bangalore S2 Lake Revival", type:"ngo", date:"18 Sept", budget:28000000, timeline:"2 years", impact:"High", description:"Lake restoration and water body conservation", category: "schemes"},
            {name:"Bangalore S3 Smart Irrigation", type:"private", date:"8 Oct", budget:16000000, timeline:"6 months", impact:"Medium", description:"Precision irrigation systems for agriculture and gardens", category: "schemes"},
            {name:"Bangalore S4 EV Awareness", type:"gov", date:"22 Sept", budget:12000000, timeline:"3 months", impact:"Low", description:"Electric vehicle awareness and adoption campaigns", category: "schemes"},
            {name:"Bangalore S5 Tree Corridor", type:"ngo", date:"15 Oct", budget:20000000, timeline:"1 year", impact:"High", description:"Green corridor development and tree plantation drives", category: "schemes"}
        ]
    },
    greenAreas: {
        Pune: [
            {location: "Empress Garden", type: "Garden", oxygen: "High", coords: [18.5007, 73.8777], category: "green_areas"},
            {location: "Pashan Lake", type: "Wetland", oxygen: "Medium", coords: [18.5400, 73.7870], category: "green_areas"},
            {location: "Baner Hill", type: "Forest", oxygen: "High", coords: [18.5477, 73.7925], category: "green_areas"},
            {location: "Taljai Forest", type: "Forest", oxygen: "High", coords: [18.4839, 73.8444], category: "green_areas"},
            {location: "Okayama Garden", type: "Garden", oxygen: "Medium", coords: [18.4913, 73.8368], category: "green_areas"}
        ],
        Mumbai: [
            {location: "Sanjay Gandhi National Park", type: "Forest", oxygen: "High", coords: [19.2215, 72.9131], category: "green_areas"},
            {location: "Powai Lake", type: "Wetland", oxygen: "Medium", coords: [19.1256, 72.9051], category: "green_areas"},
            {location: "Hanging Gardens", type: "Garden", oxygen: "Medium", coords: [18.9567, 72.8052], category: "green_areas"},
            {location: "Aarey Forest", type: "Forest", oxygen: "High", coords: [19.1485, 72.8712], category: "green_areas"},
            {location: "Joggers Park", type: "Garden", oxygen: "Medium", coords: [19.0622, 72.8214], category: "green_areas"}
        ],
        Delhi: [
            {location: "Lodhi Garden", type: "Garden", oxygen: "Medium", coords: [28.5931, 77.2191], category: "green_areas"},
            {location: "Yamuna Biodiversity Park", type: "Forest", oxygen: "High", coords: [28.7495, 77.2215], category: "green_areas"},
            {location: "Sanjay Lake", type: "Wetland", oxygen: "Medium", coords: [28.6117, 77.3015], category: "green_areas"},
            {location: "Nehru Park", type: "Garden", oxygen: "Medium", coords: [28.5933, 77.1957], category: "green_areas"},
            {location: "Aravalli Biodiversity Park", type: "Forest", oxygen: "High", coords: [28.5414, 77.1491], category: "green_areas"}
        ],
        Bangalore: [
            {location: "Cubbon Park", type: "Garden", oxygen: "High", coords: [12.9779, 77.5952], category: "green_areas"},
            {location: "Lalbagh Botanical Garden", type: "Garden", oxygen: "High", coords: [12.9507, 77.5848], category: "green_areas"},
            {location: "Ulsoor Lake", type: "Wetland", oxygen: "Medium", coords: [12.9815, 77.6229], category: "green_areas"},
            {location: "Bannerghatta Forest", type: "Forest", oxygen: "High", coords: [12.8013, 77.5777], category: "green_areas"},
            {location: "JP Park", type: "Garden", oxygen: "Medium", coords: [12.0360, 77.5558], category: "green_areas"}
        ]
    },
    locations: {
        Pune: [
            {name: "Shivajinagar", type: "Traffic Point", coords: [18.5308, 73.8475], category: "locations"},
            {name: "Hinjewadi IT Park", type: "Business District", coords: [18.5912, 73.7389], category: "locations"},
            {name: "Baner Road", type: "Residential Area", coords: [18.5590, 73.7868], category: "locations"},
            {name: "Swargate", type: "Commercial Hub", coords: [18.5018, 73.8636], category: "locations"},
            {name: "Katraj Chowk", type: "Transportation Hub", coords: [18.4529, 73.8652], category: "locations"}
        ],
        Mumbai: [
            {name: "Bandra", type: "Residential Area", coords: [19.0596, 72.8295], category: "locations"},
            {name: "Andheri", type: "Commercial Hub", coords: [19.1136, 72.8697], category: "locations"},
            {name: "Dadar", type: "Transportation Hub", coords: [19.0176, 72.8478], category: "locations"},
            {name: "Sion", type: "Mixed Use", coords: [19.0433, 72.8610], category: "locations"},
            {name: "Powai", type: "Business District", coords: [19.1176, 72.9060], category: "locations"}
        ],
        Delhi: [
            {name: "Connaught Place", type: "Commercial Hub", coords: [28.6315, 77.2167], category: "locations"},
            {name: "Karol Bagh", type: "Market Area", coords: [28.6519, 77.1909], category: "locations"},
            {name: "AIIMS", type: "Medical Center", coords: [28.5672, 77.2100], category: "locations"},
            {name: "Lajpat Nagar", type: "Residential Area", coords: [28.5677, 77.2433], category: "locations"},
            {name: "Dwarka", type: "Modern Township", coords: [28.5921, 77.0460], category: "locations"}
        ],
        Bangalore: [
            {name: "Silk Board", type: "IT Hub", coords: [12.9177, 77.6229], category: "locations"},
            {name: "Electronic City", type: "Tech Park", coords: [12.8456, 77.6603], category: "locations"},
            {name: "Whitefield", type: "Business District", coords: [12.9698, 77.7500], category: "locations"},
            {name: "Majestic", type: "Transportation Hub", coords: [12.9763, 77.5713], category: "locations"},
            {name: "Indiranagar", type: "Residential Area", coords: [12.9719, 77.6412], category: "locations"}
        ]
    }
};

function performSearch(query) {
    const searchQuery = query || document.getElementById('searchQuery').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');

    if (!searchQuery) {
        resultsDiv.innerHTML = '<p>Please enter a search query.</p>';
        return;
    }

    const results = {
        schemes: [],
        green_areas: [],
        locations: []
    };

    const city = localStorage.getItem('city') || 'Pune';

    // Search in schemes
    if (searchData.schemes[city]) {
        searchData.schemes[city].forEach(item => {
            if (matchesQuery(item, searchQuery)) {
                results.schemes.push(item);
            }
        });
    }

    // Search in green areas
    if (searchData.greenAreas[city]) {
        searchData.greenAreas[city].forEach(item => {
            if (matchesQuery(item, searchQuery)) {
                results.green_areas.push(item);
            }
        });
    }

    // Search in locations
    if (searchData.locations[city]) {
        searchData.locations[city].forEach(item => {
            if (matchesQuery(item, searchQuery)) {
                results.locations.push(item);
            }
        });
    }

    displaySearchResults(results, searchQuery);
}

function matchesQuery(item, query) {
    const searchFields = ['name', 'location', 'type', 'description', 'oxygen', 'impact', 'timeline'];
    return searchFields.some(field => {
        return item[field] && item[field].toLowerCase().includes(query);
    });
}

function displaySearchResults(results, query) {
    const resultsDiv = document.getElementById('searchResults');
    let html = `<h3>Search results for "${query}"</h3>`;

    const categories = {
        schemes: { title: 'Schemes', icon: '📋' },
        green_areas: { title: 'Green Areas', icon: '🌳' },
        locations: { title: 'Locations', icon: '📍' }
    };

    let hasResults = false;

    Object.keys(categories).forEach(category => {
        const items = results[category];
        if (items.length > 0) {
            hasResults = true;
            html += `
                <div class="search-category">
                    <h4>${categories[category].icon} ${categories[category].title} (${items.length})</h4>
                    <div class="search-items">
            `;

            items.forEach(item => {
                html += createResultCard(item, category);
            });

            html += `
                    </div>
                </div>
            `;
        }
    });

    if (!hasResults) {
        html += `<p class="no-results">No results found</p>`;
    }

    resultsDiv.innerHTML = html;
}

function createResultCard(item, category) {
    let cardHtml = '<div class="result-card">';

    switch (category) {
        case 'schemes':
            cardHtml += `
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <div class="result-meta">
                    <span>Type: ${item.type.toUpperCase()}</span>
                    <span>Budget: ₹${(item.budget/10000000).toFixed(1)} Cr</span>
                    <span>Impact: ${item.impact}</span>
                </div>
            `;
            break;

        case 'green_areas':
            cardHtml += `
                <h5>${item.location}</h5>
                <p>Type: ${item.type}</p>
                <div class="result-meta">
                    <span>Oxygen Output: ${item.oxygen}</span>
                </div>
            `;
            break;

        case 'locations':
            cardHtml += `
                <h5>${item.name}</h5>
                <p>Type: ${item.type}</p>
                <div class="result-meta">
                    <span>Coordinates: ${item.coords.join(', ')}</span>
                </div>
            `;
            break;
    }

    cardHtml += '</div>';
    return cardHtml;
}

// Global search functionality for navbar
function setupGlobalSearch() {
    const searchInputs = document.querySelectorAll('#globalSearch');
    const searchBtns = document.querySelectorAll('#searchBtn');

    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            const query = input.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    });

    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = input.value.trim();
                if (query) {
                    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    });
}

// Initialize global search on all pages
document.addEventListener('DOMContentLoaded', setupGlobalSearch);

// Add CSS for search results
const searchStyles = `
<style>
.search-input-section {
    margin-bottom: 30px;
    text-align: center;
}

.search-input-section input {
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 16px;
    width: 300px;
    margin-right: 10px;
}

.search-input-section button {
    background: #22c55e;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
}

.search-input-section button:hover {
    background: #16a34a;
}

.search-category {
    margin-bottom: 30px;
}

.search-category h4 {
    color: #22c55e;
    margin-bottom: 15px;
    font-size: 18px;
}

.search-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
}

.result-card {
    background: rgba(30, 41, 59, 0.55);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 20px;
    border-radius: 12px;
}

.result-card h5 {
    color: #22c55e;
    margin-bottom: 10px;
}

.result-card p {
    color: #cbd5f5;
    margin: 5px 0;
}

.result-meta {
    margin-top: 10px;
    font-size: 14px;
}

.result-meta span {
    display: inline-block;
    background: rgba(34, 197, 94, 0.1);
    padding: 2px 8px;
    border-radius: 10px;
    margin: 2px 5px 2px 0;
    color: #4ade80;
}

.no-results {
    text-align: center;
    color: #94a3b8;
    font-size: 18px;
    margin: 50px 0;
}

@media (max-width: 768px) {
    .search-input-section input {
        width: 250px;
    }

    .search-items {
        grid-template-columns: 1fr;
    }
}
</style>
`;

// Inject search styles
document.head.insertAdjacentHTML('beforeend', searchStyles);