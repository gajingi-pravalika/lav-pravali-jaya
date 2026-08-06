
// Dataset of Problems, Affected Crops, Images, and Chemical Solutions
const problemData = [
    {
        problem: "Aphids & Sap-Sucking Pests",
        crop: "Pulses, Oilseeds, Vegetables",
        symptom: "Yellowing leaves, stunted crop growth, and sticky honey-dew deposits.",
        image: "b.jpeg",
        chemical: "Imidacloprid 17.8% SL",
        dosage: "0.5 ml per liter of water"
    },
    {
        problem: "Paddy Stem Borer",
        crop: "Rice / Paddy",
        symptom: "Drying of central shoots ('Dead Hearts') during early growth stage.",
        image: "a.jpeg",
        chemical: "Chlorantraniliprole 18.5% SC",
        dosage: "0.3 ml per liter of water"
    },
    {
        problem: "Pod Borer / Helicoverpa",
        crop: "Pigeon Pea (Kandulu), Chickpea",
        symptom: "Bored holes in pods and eaten seeds inside pods.",
        image: "c.jpeg",
        chemical: "Emamectin Benzoate 5% SG",
        dosage: "0.4 g per liter of water"
    },
    {
        problem: "Powdery Mildew",
        crop: "Black Gram, Sesame, Vegetables",
        symptom: "White flour-like powdery patches on upper leaf surfaces.",
        image: "d.jpeg",
        chemical: "Hexaconazole 5% EC",
        dosage: "2.0 ml per liter of water"
    },
    {
        problem: "Tiki Disease / Leaf Spot",
        crop: "Groundnut (Verusenaga)",
        symptom: "Dark brown/black spots surrounded by yellow halos on leaves.",
        image: "f.jpeg",
        chemical: "Mancozeb 75% WP",
        dosage: "2.0 g per liter of water"
    },
    {
        problem: "Fall Armyworm",
        crop: "Sorghum, Pearl Millet, Maize",
        symptom: "Large ragged holes on leaves and sawdust-like frass inside central whorl.",
        image: "e.jpeg",
        chemical: "Spinetoram 11.7% SC",
        dosage: "0.5 ml per liter of water"
    }
];

// Crop Dataset
const cropData = [
    { 
        name: "Pigeon Pea (Kandulu)", 
        type: "pulses", 
        duration: "120-180 Days", 
        water: "Very Low",
        image: "g.jpeg" 
    },
    { 
        name: "Black Gram (Minumulu)", 
        type: "pulses", 
        duration: "75-90 Days", 
        water: "Low",
        image: "l.jpeg" 
    },
    { 
        name: "Green Gram (Pesalu)", 
        type: "pulses", 
        duration: "65-75 Days", 
        water: "Low",
        image: "i.jpeg" 
    },
    { 
        name: "Sorghum (Jonnalu)", 
        type: "millets", 
        duration: "100-110 Days", 
        water: "Very Low",
        image: "j.jpeg" 
    },
    { 
        name: "Pearl Millet (Sajjalu)", 
        type: "millets", 
        duration: "80-90 Days", 
        water: "Very Low",
        image: "n.jpeg" 
    },
    { 
        name: "Finger Millet (Ragi)", 
        type: "millets", 
        duration: "95-105 Days", 
        water:"moderate",
        image:"m.jpeg" 
    },
    { 
        name: "Groundnut (Verusenaga)", 
        type: "oil", 
        duration: "105-115 Days", 
        water: "Moderate",
        image: "k.jpeg" 
    },
    { 
        name: "Sesame (Nuvvulu)", 
        type: "oil", 
        duration: "80-85 Days", 
        water: "Very Low",
        image: "r.jpeg" 
    }
];

// Render Problem Cards with Header Images
function renderProblems() {
    const grid = document.getElementById('problemGrid');
    grid.innerHTML = '';
    problemData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.innerHTML = `
            <div class="problem-img-wrapper">
                <img src="${item.image}" alt="${item.problem}" class="problem-img">
            </div>
            <div class="problem-card-body">
                <h3>🐛 ${item.problem}</h3>
                <p class="affected-crop"><strong>Affected Crops:</strong> ${item.crop}</p>
                <p><strong>Symptoms:</strong> ${item.symptom}</p>
                <div class="chemical-box">
                    <h4>🧪 Recommended Chemical Solution:</h4>
                    <p>${item.chemical}</p>
                    <div class="dosage">📐 <strong>Dosage:</strong> ${item.dosage}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Display Crops Dynamically
function renderCrops(items) {
    const grid = document.getElementById('cropGrid');
    grid.innerHTML = '';
    items.forEach((crop, index) => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.innerHTML = `
            <div class="crop-card-bg" style="background-image: url('${crop.image}');"></div>
            <div class="crop-card-content">
                <h4>${crop.name}</h4>
                <p>⏱️ <strong>Duration:</strong> ${crop.duration}</p>
                <p>💧 <strong>Water Need:</strong> ${crop.water}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Crops by Category
function filterCrops(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderCrops(cropData);
    } else {
        const filtered = cropData.filter(item => item.type === category);
        renderCrops(filtered);
    }
}

// Scroll Fade-in Observer Animation
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Initialize Problem Cards and Crop Cards
    renderProblems();
    renderCrops(cropData);
});

// Handle Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('farmerName').value;
    alert(`Thank you ${name}! Your request for chemical advisory has been submitted.`);
    e.target.reset();
}
 // 4. Dynamic Feedback Addition
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackGrid = document.getElementById('feedback-grid');

    if (feedbackForm && feedbackGrid) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('feedbackName').value;
            const location = document.getElementById('feedbackLocation').value;
            const comment = document.getElementById('feedbackComment').value;

            // Create new feedback card element
            const newCard = document.createElement('div');
            newCard.className = 'feedback-card animate-on-scroll visible';
            newCard.innerHTML = `
                <div class="quote-icon">“</div>
                <p class="feedback-text">"${comment}"</p>
                <div class="farmer-profile">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="${name}" class="farmer-avatar">
                    <div class="farmer-details">
                        <h4>${name}</h4>
                        <p class="farmer-location">📍 ${location}</p>
                        <div class="star-rating">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
            `;

            // Append to top of feedback grid
            feedbackGrid.prepend(newCard);

            alert('Thank you for sharing your feedback!');
            feedbackForm.reset();
        });
    }