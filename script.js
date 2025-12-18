// ============================================
// QUANTUM MOTORS - PHYGITAL EXPERIENCE
// Interactive JavaScript Functions
// ============================================

// Vehicle Database
const vehicleData = {
    e4: {
        name: 'Quantum E4',
        basePrice: 28500,
        consumption: 15, // kWh/100km
        range: 420,
        power: 150,
        acceleration: 8.5
    },
    nexus: {
        name: 'Quantum Nexus',
        basePrice: 42800,
        consumption: 18, // kWh/100km
        range: 500,
        power: 200,
        acceleration: 7.2
    },
    kaiyi: {
        name: 'Kaiyi Urban',
        basePrice: 22900,
        consumption: 13, // kWh/100km
        range: 380,
        power: 120,
        acceleration: 9.8
    }
};

// Competitor Vehicle Database
const competitorData = {
    'toyota-corolla': { consumption: 6.5, name: 'Toyota Corolla' }, // L/100km
    'honda-civic': { consumption: 6.8, name: 'Honda Civic' },
    'nissan-sentra': { consumption: 7.0, name: 'Nissan Sentra' },
    'hyundai-tucson': { consumption: 8.5, name: 'Hyundai Tucson' },
    'ford-escape': { consumption: 8.2, name: 'Ford Escape' },
    'chevrolet-equinox': { consumption: 8.7, name: 'Chevrolet Equinox' }
};

// Accessory Prices
const accessoryPrices = {
    sunroof: 2500,
    leather: 1800,
    sound: 1200,
    autopilot: 3500
};

// Current Customization State
let currentCustomization = {
    model: 'e4',
    color: 'white',
    accessories: []
};

// ============================================
// NAVIGATION
// ============================================

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Initialize components
    initCatalogFilter();
    initRangeSlider();
    initCustomizer();
    initContactForm();
    
    // Scroll spy for navigation
    window.addEventListener('scroll', updateNavigationOnScroll);
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateNavigationOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ============================================
// CATALOG FILTER
// ============================================

function initCatalogFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter vehicles
            vehicleCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

function selectVehicle(vehicleId) {
    const vehicle = vehicleData[vehicleId];
    
    // Create modal or detailed view
    alert(`${vehicle.name}\n\nPrecio: $${vehicle.basePrice.toLocaleString()}\nAutonomía: ${vehicle.range}km\nPotencia: ${vehicle.power}kW\n0-100km/h: ${vehicle.acceleration}s\n\n¡Contáctanos para más información!`);
}

// ============================================
// CALCULATOR
// ============================================

function initRangeSlider() {
    const rangeInput = document.getElementById('kmMonth');
    const rangeValue = document.getElementById('kmValue');
    
    if (rangeInput && rangeValue) {
        rangeInput.addEventListener('input', function() {
            rangeValue.textContent = this.value;
        });
    }
}

function calculateSavings() {
    // Get form values
    const currentVehicle = document.getElementById('currentVehicle').value;
    const quantumModel = document.getElementById('quantumModel').value;
    const kmMonth = parseInt(document.getElementById('kmMonth').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    const electricityPrice = parseFloat(document.getElementById('electricityPrice').value);
    
    // Validation
    if (!currentVehicle) {
        alert('Por favor selecciona tu vehículo actual');
        return;
    }
    
    // Get vehicle data
    const competitor = competitorData[currentVehicle];
    const quantum = vehicleData[quantumModel];
    
    // Calculate costs
    // Gasoline: km/month * (L/100km) / 100 * price/L
    const gasolineCostMonth = (kmMonth * competitor.consumption / 100) * fuelPrice;
    const gasolineCostYear = gasolineCostMonth * 12;
    const gasolineCost5Years = gasolineCostYear * 5;
    
    // Electric: km/month * (kWh/100km) / 100 * price/kWh
    const electricCostMonth = (kmMonth * quantum.consumption / 100) * electricityPrice;
    const electricCostYear = electricCostMonth * 12;
    const electricCost5Years = electricCostYear * 5;
    
    // Savings
    const savingsMonth = gasolineCostMonth - electricCostMonth;
    const savingsYear = gasolineCostYear - electricCostYear;
    const savings5Years = gasolineCost5Years - electricCost5Years;
    
    // Additional savings (maintenance, etc.)
    const maintenanceSavings = 1200; // per year
    const totalSavingsYear = savingsYear + maintenanceSavings;
    const totalSavings5Years = savings5Years + (maintenanceSavings * 5);
    
    // Display results
    displayCalculatorResults({
        competitor: competitor.name,
        quantum: quantum.name,
        gasolineCostMonth: gasolineCostMonth,
        gasolineCostYear: gasolineCostYear,
        electricCostMonth: electricCostMonth,
        electricCostYear: electricCostYear,
        savingsMonth: savingsMonth,
        savingsYear: savingsYear,
        totalSavingsYear: totalSavingsYear,
        savings5Years: savings5Years,
        totalSavings5Years: totalSavings5Years
    });
}

function displayCalculatorResults(data) {
    const resultsContainer = document.getElementById('calculatorResults');
    
    const html = `
        <div class="results-grid">
            <div class="result-card">
                <div class="result-label">Costo mensual combustible</div>
                <div class="result-value">$${data.gasolineCostMonth.toFixed(2)}</div>
            </div>
            
            <div class="result-card">
                <div class="result-label">Costo mensual electricidad</div>
                <div class="result-value">$${data.electricCostMonth.toFixed(2)}</div>
            </div>
            
            <div class="result-card">
                <div class="result-label">Ahorro mensual</div>
                <div class="result-value">$${data.savingsMonth.toFixed(2)}</div>
            </div>
            
            <div class="result-card">
                <div class="result-label">Ahorro anual (combustible)</div>
                <div class="result-value">$${data.savingsYear.toFixed(2)}</div>
            </div>
            
            <div class="result-highlight">
                <h3>Ahorro Total Anual</h3>
                <span class="big-number">$${data.totalSavingsYear.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                <p>Incluyendo mantenimiento y otros costos</p>
            </div>
            
            <div class="result-highlight" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                <h3>Ahorro en 5 Años</h3>
                <span class="big-number">$${data.totalSavings5Years.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                <p>Al cambiar de ${data.competitor} a ${data.quantum}</p>
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = html;
    
    // Animate results
    setTimeout(() => {
        resultsContainer.querySelectorAll('.result-card, .result-highlight').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 10);
}

// ============================================
// CUSTOMIZER
// ============================================

function initCustomizer() {
    // Initialize checkboxes for accessories
    const checkboxes = document.querySelectorAll('.accessory-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCustomizerPrice);
    });
    
    updatePreviewVehicle();
    updateCustomizerPrice();
}

function selectModel(modelId) {
    currentCustomization.model = modelId;
    
    // Update button states
    document.querySelectorAll('.model-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-model="${modelId}"]`).classList.add('active');
    
    updatePreviewVehicle();
    updateCustomizerPrice();
}

function selectColor(color) {
    currentCustomization.color = color;
    
    // Update button states
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-color="${color}"]`).classList.add('active');
    
    updatePreviewVehicle();
}

function updatePreviewVehicle() {
    const previewVehicle = document.querySelector('.vehicle-silhouette');
    const colorMap = {
        white: '#ffffff',
        black: '#1a1a1a',
        silver: 'linear-gradient(135deg, #c0c0c0, #808080)',
        blue: '#1e3a8a',
        red: '#dc2626',
        green: '#00C896'
    };
    
    if (previewVehicle) {
        previewVehicle.style.background = colorMap[currentCustomization.color] || colorMap.white;
        
        // Add animation
        previewVehicle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            previewVehicle.style.transform = 'scale(1)';
        }, 200);
    }
}

function updateCustomizerPrice() {
    const vehicle = vehicleData[currentCustomization.model];
    let basePrice = vehicle.basePrice;
    let accessoriesTotal = 0;
    
    // Calculate accessories
    const checkboxes = document.querySelectorAll('.accessory-checkbox:checked');
    currentCustomization.accessories = [];
    
    checkboxes.forEach(checkbox => {
        const accessory = checkbox.value;
        accessoriesTotal += accessoryPrices[accessory];
        currentCustomization.accessories.push(accessory);
    });
    
    const totalPrice = basePrice + accessoriesTotal;
    
    // Update display
    document.getElementById('basePrice').textContent = `$${basePrice.toLocaleString()}`;
    document.getElementById('accessoriesPrice').textContent = `$${accessoriesTotal.toLocaleString()}`;
    document.getElementById('totalPrice').textContent = `$${totalPrice.toLocaleString()}`;
}

function rotateVehicle(direction) {
    const previewVehicle = document.querySelector('.vehicle-silhouette');
    
    if (direction === 'left') {
        previewVehicle.style.transform = 'rotateY(-15deg) scale(0.95)';
    } else {
        previewVehicle.style.transform = 'rotateY(15deg) scale(0.95)';
    }
    
    setTimeout(() => {
        previewVehicle.style.transform = 'rotateY(0deg) scale(1)';
    }, 300);
}

function requestQuote() {
    const vehicle = vehicleData[currentCustomization.model];
    const accessories = currentCustomization.accessories.map(acc => {
        const labels = {
            sunroof: 'Techo panorámico',
            leather: 'Asientos de cuero premium',
            sound: 'Sistema de sonido premium',
            autopilot: 'Piloto automático avanzado'
        };
        return labels[acc];
    }).join(', ') || 'Ninguno';
    
    const colorNames = {
        white: 'Blanco',
        black: 'Negro',
        silver: 'Plateado',
        blue: 'Azul',
        red: 'Rojo',
        green: 'Verde Quantum'
    };
    
    const message = `
COTIZACIÓN QUANTUM MOTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Modelo: ${vehicle.name}
Color: ${colorNames[currentCustomization.color]}
Accesorios: ${accessories}

Precio Base: $${vehicle.basePrice.toLocaleString()}
Accesorios: $${currentCustomization.accessories.reduce((sum, acc) => sum + accessoryPrices[acc], 0).toLocaleString()}
TOTAL: $${(vehicle.basePrice + currentCustomization.accessories.reduce((sum, acc) => sum + accessoryPrices[acc], 0)).toLocaleString()}

¡Gracias por tu interés! Nuestro equipo se pondrá en contacto contigo pronto.
    `;
    
    alert(message);
    
    // In a real application, this would send the quote to a server
    // or open the contact form with pre-filled data
    scrollToSection('contacto');
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Show success message
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
            
            // Reset form
            form.reset();
            
            // In a real application, this would send the data to a server
        });
    }
}

// ============================================
// ANIMATIONS & EFFECTS
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.vehicle-card, .result-card, .timeline-item, .mission-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(amount);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        vehicleData,
        competitorData,
        calculateSavings,
        selectModel,
        selectColor
    };
}

console.log('🚗 Quantum Motors Phygital Experience Loaded Successfully');
