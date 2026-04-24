// Sustainability Tools JavaScript

// Carbon Calculator
function calculateCarbon() {
    const electricity = parseFloat(document.getElementById('electricityInput').value) || 0;
    const gas = parseFloat(document.getElementById('gasInput').value) || 0;
    const fuel = parseFloat(document.getElementById('fuelInput').value) || 0;
    const waste = parseFloat(document.getElementById('wasteInput').value) || 0;

    // CO2 emission factors (kg CO2 per unit)
    const electricityFactor = 0.92; // kg CO2 per kWh
    const gasFactor = 1.96; // kg CO2 per m³
    const fuelFactor = 2.31; // kg CO2 per liter
    const wasteFactor = 0.5; // kg CO2 per kg waste

    const totalCO2 = (electricity * electricityFactor) +
                     (gas * gasFactor) +
                     (fuel * fuelFactor) +
                     (waste * wasteFactor);

    const resultDiv = document.getElementById('carbonResult');
    const amountSpan = document.getElementById('carbonAmount');
    const tipsDiv = document.getElementById('reductionTips');

    amountSpan.textContent = `${totalCO2.toFixed(1)} kg CO₂/month`;

    // Generate reduction tips based on highest contributors
    let tips = '<h4>Reduction Tips:</h4><ul>';

    if (electricity * electricityFactor > totalCO2 * 0.3) {
        tips += '<li>Switch to LED bulbs and energy-efficient appliances</li>';
        tips += '<li>Use solar panels for electricity generation</li>';
    }
    if (fuel * fuelFactor > totalCO2 * 0.3) {
        tips += '<li>Use public transport or carpooling</li>';
        tips += '<li>Switch to electric vehicle</li>';
    }
    if (gas * gasFactor > totalCO2 * 0.3) {
        tips += '<li>Use energy-efficient gas appliances</li>';
        tips += '<li>Improve home insulation</li>';
    }
    if (waste * wasteFactor > totalCO2 * 0.3) {
        tips += '<li>Reduce food waste and compost organic matter</li>';
        tips += '<li>Recycle more and reduce plastic usage</li>';
    }

    tips += '</ul>';
    tipsDiv.innerHTML = tips;

    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function resetCalculator() {
    document.getElementById('electricityInput').value = '';
    document.getElementById('gasInput').value = '';
    document.getElementById('gasInput').value = '';
    document.getElementById('fuelInput').value = '';
    document.getElementById('wasteInput').value = '';
    document.getElementById('carbonResult').style.display = 'none';
}

// Energy Audit
function performEnergyAudit() {
    const buildingAge = document.getElementById('buildingAge').value;
    const insulation = document.getElementById('insulation').value;
    const electricityBill = parseFloat(document.getElementById('electricityBill').value) || 0;

    // Calculate efficiency score based on inputs
    let score = 100;

    // Building age impact
    if (buildingAge === 'old') score -= 20;
    else if (buildingAge === 'medium') score -= 10;

    // Insulation impact
    if (insulation === 'poor') score -= 25;
    else if (insulation === 'none') score -= 40;
    else if (insulation === 'good') score -= 5;

    // Electricity bill impact (assuming average bill is ₹2000)
    if (electricityBill > 3000) score -= 15;
    else if (electricityBill > 2000) score -= 5;

    // Ensure score doesn't go below 0
    score = Math.max(0, score);

    const resultDiv = document.getElementById('auditResult');
    const scoreDiv = document.getElementById('efficiencyScore');
    const recommendationsDiv = document.getElementById('auditRecommendations');
    const savingsDiv = document.getElementById('potentialSavings');

    scoreDiv.textContent = `${score}%`;
    scoreDiv.style.color = score >= 80 ? '#22c55e' : score >= 60 ? '#f59e0b' : '#ef4444';

    // Generate recommendations
    let recommendations = '<strong>Recommendations:</strong><ul>';
    if (insulation === 'poor' || insulation === 'none') {
        recommendations += '<li>Improve insulation in walls, roof, and windows</li>';
    }
    if (buildingAge === 'old') {
        recommendations += '<li>Consider retrofitting with modern energy-efficient materials</li>';
    }
    if (electricityBill > 2000) {
        recommendations += '<li>Install energy-efficient appliances and LED lighting</li>';
        recommendations += '<li>Consider solar panel installation</li>';
    }
    recommendations += '<li>Regular maintenance of HVAC systems</li>';
    recommendations += '<li>Use smart thermostats for better control</li>';
    recommendations += '</ul>';

    recommendationsDiv.innerHTML = recommendations;

    // Calculate potential savings
    const potentialSavings = electricityBill * 0.3; // Assume 30% savings possible
    savingsDiv.innerHTML = `<strong>Potential Monthly Savings:</strong> ₹${potentialSavings.toFixed(0)}`;

    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Waste Sorting Guide
const wasteDatabase = {
    // Recyclable
    'plastic bottle': { category: 'Recyclable', color: '#22c55e', steps: ['Rinse clean', 'Remove cap and label', 'Place in recycling bin'] },
    'glass bottle': { category: 'Recyclable', color: '#22c55e', steps: ['Rinse clean', 'Remove cap', 'Place in recycling bin'] },
    'newspaper': { category: 'Recyclable', color: '#22c55e', steps: ['Keep dry', 'Bundle together', 'Place in recycling bin'] },
    'cardboard': { category: 'Recyclable', color: '#22c55e', steps: ['Flatten boxes', 'Remove tape/staples', 'Place in recycling bin'] },
    'aluminum can': { category: 'Recyclable', color: '#22c55e', steps: ['Rinse clean', 'Crush if possible', 'Place in recycling bin'] },

    // Biodegradable
    'banana peel': { category: 'Biodegradable', color: '#16a34a', steps: ['Add to compost bin', 'Mix with other organic waste', 'Use as natural fertilizer'] },
    'vegetable scraps': { category: 'Biodegradable', color: '#16a34a', steps: ['Collect in compost bin', 'Keep moist', 'Turn regularly for decomposition'] },
    'coffee grounds': { category: 'Biodegradable', color: '#16a34a', steps: ['Add to compost', 'Balance with brown materials', 'Use for gardening'] },
    'egg shells': { category: 'Biodegradable', color: '#16a34a', steps: ['Crush into small pieces', 'Add to compost', 'Calcium supplement for plants'] },

    // Hazardous
    'battery': { category: 'Hazardous', color: '#dc2626', steps: ['Do not throw in regular waste', 'Take to e-waste collection center', 'Special disposal required'] },
    'paint': { category: 'Hazardous', color: '#dc2626', steps: ['Do not pour down drain', 'Take to hazardous waste facility', 'Special handling required'] },
    'medicine': { category: 'Hazardous', color: '#dc2626', steps: ['Do not flush', 'Take to pharmacy collection', 'Follow local guidelines'] },

    // E-waste
    'old phone': { category: 'E-waste', color: '#7c3aed', steps: ['Remove battery if possible', 'Take to e-waste recycler', 'Data wiping recommended'] },
    'computer': { category: 'E-waste', color: '#7c3aed', steps: ['Back up important data', 'Take to certified e-waste facility', 'Professional dismantling'] },
    'charger': { category: 'E-waste', color: '#7c3aed', steps: ['Cut cord for safety', 'Take to e-waste collection', 'Recycle electronic components'] }
};

function identifyWaste() {
    const item = document.getElementById('wasteItem').value.toLowerCase().trim();
    const resultDiv = document.getElementById('wasteResult');

    if (!item) {
        alert('Please enter a waste item');
        return;
    }

    // Find matching waste item
    let wasteInfo = null;
    for (const [key, info] of Object.entries(wasteDatabase)) {
        if (item.includes(key) || key.includes(item)) {
            wasteInfo = info;
            break;
        }
    }

    // Default to general waste if not found
    if (!wasteInfo) {
        wasteInfo = {
            category: 'General Waste',
            color: '#6b7280',
            steps: ['Check local waste collection guidelines', 'Separate recyclables if possible', 'Dispose in regular waste bin']
        };
    }

    const categoryDiv = document.getElementById('wasteCategory');
    const categoryName = document.getElementById('categoryName');
    const description = document.getElementById('wasteDescription');
    const stepsList = document.getElementById('disposalSteps');

    categoryName.textContent = wasteInfo.category;
    categoryName.style.color = wasteInfo.color;
    categoryDiv.style.borderLeftColor = wasteInfo.color;

    description.textContent = `This item belongs to the ${wasteInfo.category.toLowerCase()} category.`;

    stepsList.innerHTML = '';
    wasteInfo.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });

    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Sustainable Shopping
const sustainableProducts = {
    groceries: [
        { name: 'Organic Rice', cert: 'Organic', impact: 'Water-saving farming', price: '₹120/kg' },
        { name: 'Fair Trade Coffee', cert: 'Fair Trade', impact: 'Farmer fair wages', price: '₹450/kg' },
        { name: 'Recyclable Packaging Pasta', cert: 'Recyclable Packaging', impact: 'Zero plastic waste', price: '₹85/pack' }
    ],
    clothing: [
        { name: 'Organic Cotton T-shirt', cert: 'Organic', impact: 'No pesticides used', price: '₹899' },
        { name: 'Recycled Polyester Jacket', cert: 'Recyclable', impact: 'Made from recycled bottles', price: '₹2499' },
        { name: 'Fair Trade Wool Sweater', cert: 'Fair Trade', impact: 'Ethical wool sourcing', price: '₹3299' }
    ],
    electronics: [
        { name: 'Energy Star Laptop', cert: 'Carbon Neutral', impact: '50% less energy consumption', price: '₹45999' },
        { name: 'Solar Powered Charger', cert: 'Carbon Neutral', impact: 'Renewable energy powered', price: '₹1299' },
        { name: 'Recyclable Phone Case', cert: 'Recyclable', impact: 'Made from recycled plastics', price: '₹599' }
    ],
    home: [
        { name: 'Bamboo Cutting Board', cert: 'Organic', impact: 'Sustainable bamboo farming', price: '₹899' },
        { name: 'Recycled Glass Vase', cert: 'Recyclable', impact: 'Made from recycled glass', price: '₹1299' },
        { name: 'Fair Trade Cotton Towels', cert: 'Fair Trade', impact: 'Ethical textile production', price: '₹1599' }
    ]
};

function findSustainableProducts() {
    const category = document.getElementById('shoppingCategory').value;
    const certification = document.getElementById('ecoCert').value;
    const resultsDiv = document.getElementById('shoppingResults');

    let products = [];

    if (category === 'all') {
        // Get products from all categories
        Object.values(sustainableProducts).forEach(catProducts => {
            products = products.concat(catProducts);
        });
    } else {
        products = sustainableProducts[category] || [];
    }

    // Filter by certification if specified
    if (certification !== 'all') {
        products = products.filter(product => product.cert.toLowerCase().includes(certification.toLowerCase()));
    }

    // Display results
    resultsDiv.innerHTML = '';

    if (products.length === 0) {
        resultsDiv.innerHTML = '<p>No products found matching your criteria.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h4>${product.name}</h4>
            <p><strong>Certification:</strong> ${product.cert}</p>
            <p><strong>Impact:</strong> ${product.impact}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        resultsDiv.appendChild(productCard);
    });

    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Add CSS for tool-specific elements
const additionalStyles = `
<style>
.tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.tool-card {
    background: rgba(30, 41, 59, 0.55);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 25px;
    border-radius: 16px;
}

.tool-card h3 {
    color: #22c55e;
    margin-bottom: 10px;
}

.calculator-form, .audit-form, .waste-sorter, .shopping-filters {
    margin: 20px 0;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #cbd5f5;
    font-weight: 500;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 14px;
}

.form-group input:focus, .form-group select:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
}

.tool-card button {
    background: #22c55e;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 10px;
    transition: 0.3s;
}

.tool-card button:hover {
    background: #16a34a;
}

.result-display {
    margin-top: 20px;
    padding: 20px;
    background: rgba(34, 197, 94, 0.1);
    border-radius: 12px;
    border-left: 4px solid #22c55e;
}

.score-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 20px auto;
}

.waste-result {
    margin-top: 20px;
    padding: 20px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
}

.waste-category {
    border-left: 4px solid #3b82f6;
    padding-left: 15px;
    margin-bottom: 20px;
}

.disposal-guide {
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 8px;
}

.disposal-guide ul {
    margin: 10px 0 0 0;
    padding-left: 20px;
}

.disposal-guide li {
    margin-bottom: 5px;
    color: #cbd5f5;
}

.shopping-results {
    margin-top: 20px;
}

.product-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 3px solid #22c55e;
}

.product-card h4 {
    color: #22c55e;
    margin-bottom: 10px;
}

.product-card p {
    margin: 5px 0;
    color: #cbd5f5;
    font-size: 14px;
}

@media (max-width: 768px) {
    .tool-grid {
        grid-template-columns: 1fr;
    }

    .tool-card {
        padding: 20px;
    }
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);