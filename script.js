// ============================================
// QUANTUM MOTORS - INTERACTIVE PHYGITAL
// Enhanced Touch Interface JavaScript
// Currency: Bolivianos (Bs)
// ============================================

// Vehicle Database (Prices in Bolivianos)
const vehicleData = {
    e4: {
        name: 'Quantum E4',
        basePrice: 197100,
        consumption: 15, // kWh/100km
        range: 420,
        power: 150,
        acceleration: 8.5
    },
    nexus: {
        name: 'Quantum Nexus',
        basePrice: 296360,
        consumption: 18,
        range: 500,
        power: 200,
        acceleration: 7.2
    },
    kaiyi: {
        name: 'Kaiyi Urban',
        basePrice: 158530,
        consumption: 13,
        range: 380,
        power: 120,
        acceleration: 9.8
    }
};

const competitorData = {
    'toyota-corolla': { consumption: 6.5, name: 'Toyota Corolla' },
    'honda-civic': { consumption: 6.8, name: 'Honda Civic' },
    'nissan-sentra': { consumption: 7.0, name: 'Nissan Sentra' },
    'hyundai-tucson': { consumption: 8.5, name: 'Hyundai Tucson' },
    'ford-escape': { consumption: 8.2, name: 'Ford Escape' },
    'chevrolet-equinox': { consumption: 8.7, name: 'Chevrolet Equinox' }
};

const FUEL_PRICE_BS = 6.96;
const ELECTRICITY_PRICE_BS = 0.88;

const accessoryPrices = {
    sunroof: 17300,
    leather: 12460,
    sound: 8304,
    autopilot: 24220
};

let calculatorState = {
    currentVehicle: null,
    quantumModel: null,
    kmPerMonth: 1500,
    step: 1
};

let customizerState = {
    model: 'e4',
    color: 'white',
    accessories: []
};

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initCatalogFilter();
    initCalculator();
    initCustomizer();
    initAnimations();
    console.log('🚗 Quantum Motors Interactive Experience Loaded');
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    window.addEventListener('scroll', updateNavigationOnScroll);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
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
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

function initCatalogFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            if ('vibrate' in navigator) navigator.vibrate(50);
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
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

function openVehicleDetail(vehicleId) {
    if ('vibrate' in navigator) navigator.vibrate([50, 100, 50]);
    window.open('https://tuquantum.com/catalogo-vehiculos/', '_blank');
}

function initCalculator() {
    const kmSlider = document.getElementById('kmSlider');
    const kmDisplay = document.getElementById('kmDisplay');
    if (kmSlider && kmDisplay) {
        kmSlider.addEventListener('input', function() {
            const value = parseInt(this.value).toLocaleString('es-BO');
            kmDisplay.textContent = value;
            calculatorState.kmPerMonth = parseInt(this.value);
        });
    }
}

function selectCurrentVehicle(vehicleId) {
    calculatorState.currentVehicle = vehicleId;
    document.querySelectorAll('.vehicle-calc-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.vehicle-calc-card').classList.add('selected');
    if ('vibrate' in navigator) navigator.vibrate(50);
    setTimeout(() => goToStep(2), 600);
}

function selectQuantumVehicle(modelId) {
    calculatorState.quantumModel = modelId;
    document.querySelectorAll('.quantum-calc-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.quantum-calc-card').classList.add('selected');
    if ('vibrate' in navigator) navigator.vibrate(50);
    setTimeout(() => goToStep(3), 600);
}

function setKm(km) {
    calculatorState.kmPerMonth = km;
    const kmSlider = document.getElementById('kmSlider');
    const kmDisplay = document.getElementById('kmDisplay');
    if (kmSlider) kmSlider.value = km;
    if (kmDisplay) kmDisplay.textContent = km.toLocaleString('es-BO');
    document.querySelectorAll('.km-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    if ('vibrate' in navigator) navigator.vibrate(30);
}

function goToStep(stepNumber) {
    calculatorState.step = stepNumber;
    document.querySelectorAll('.wizard-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === stepNumber - 1) step.classList.add('active');
    });
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === stepNumber - 1) dot.classList.add('active');
    });
}

function calculateInteractiveSavings() {
    const { currentVehicle, quantumModel, kmPerMonth } = calculatorState;
    if (!currentVehicle || !quantumModel) {
        alert('Por favor completa todos los pasos primero');
        return;
    }
    if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
    const competitor = competitorData[currentVehicle];
    const quantum = vehicleData[quantumModel];
    const gasolineCostMonth = (kmPerMonth * competitor.consumption / 100) * FUEL_PRICE_BS;
    const electricCostMonth = (kmPerMonth * quantum.consumption / 100) * ELECTRICITY_PRICE_BS;
    const gasolineCostYear = gasolineCostMonth * 12;
    const electricCostYear = electricCostMonth * 12;
    const savingsMonth = gasolineCostMonth - electricCostMonth;
    const savingsYear = gasolineCostYear - electricCostYear;
    const maintenanceSavingsYear = 8300;
    const totalSavingsYear = savingsYear + maintenanceSavingsYear;
    const savings5Years = (savingsYear * 5) + (maintenanceSavingsYear * 5);
    displayResults({
        competitor: competitor.name,
        quantum: quantum.name,
        gasolineCostMonth,
        electricCostMonth,
        savingsMonth,
        savingsYear,
        totalSavingsYear,
        savings5Years
    });
}

function displayResults(data) {
    const resultsPanel = document.getElementById('resultsPanel');
    const html = `
        <div class="results-grid">
            <div class="result-card">
                <div class="result-label">Costo mensual gasolina</div>
                <div class="result-value">Bs ${data.gasolineCostMonth.toFixed(2)}</div>
            </div>
            <div class="result-card">
                <div class="result-label">Costo mensual electricidad</div>
                <div class="result-value">Bs ${data.electricCostMonth.toFixed(2)}</div>
            </div>
            <div class="result-card">
                <div class="result-label">Ahorro mensual</div>
                <div class="result-value">Bs ${data.savingsMonth.toFixed(2)}</div>
            </div>
            <div class="result-card">
                <div class="result-label">Ahorro anual en combustible</div>
                <div class="result-value">Bs ${data.savingsYear.toLocaleString('es-BO', {minimumFractionDigits: 2})}</div>
            </div>
            <div class="result-highlight">
                <h3>🎉 Ahorro Total Anual</h3>
                <span class="big-savings">Bs ${data.totalSavingsYear.toLocaleString('es-BO', {minimumFractionDigits: 0})}</span>
                <p>Incluyendo mantenimiento y costos operativos</p>
            </div>
            <div class="result-highlight" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                <h3>💰 Proyección a 5 Años</h3>
                <span class="big-savings">Bs ${data.savings5Years.toLocaleString('es-BO', {minimumFractionDigits: 0})}</span>
                <p>Ahorro total al cambiar de ${data.competitor} a ${data.quantum}</p>
            </div>
        </div>
    `;
    resultsPanel.innerHTML = html;
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function initCustomizer() {
    updateCustomizerPreview();
    updateCustomizerPrice();
}

function selectModel(modelId) {
    customizerState.model = modelId;
    document.querySelectorAll('.model-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="selectModel('${modelId}')"]`).classList.add('active');
    if ('vibrate' in navigator) navigator.vibrate(50);
    updateCustomizerPreview();
    updateCustomizerPrice();
}

function selectColor(color) {
    customizerState.color = color;
    document.querySelectorAll('.color-circle').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="selectColor('${color}')"]`).classList.add('active');
    if ('vibrate' in navigator) navigator.vibrate(40);
    updateCustomizerPreview();
}

function updateCustomizer() {
    const checkboxes = document.querySelectorAll('.accessory-toggle input[type="checkbox"]:checked');
    customizerState.accessories = Array.from(checkboxes).map(cb => cb.value);
    if ('vibrate' in navigator) navigator.vibrate(30);
    updateCustomizerPrice();
}

function updateCustomizerPreview() {
    const vehicle3d = document.querySelector('.vehicle-3d');
    const colorMap = {
        white: '#ffffff',
        black: '#1a1a1a',
        silver: 'linear-gradient(135deg, #c0c0c0, #808080)',
        blue: '#1e3a8a',
        red: '#dc2626',
        green: '#00C896'
    };
    if (vehicle3d) {
        vehicle3d.style.background = colorMap[customizerState.color] || colorMap.white;
        vehicle3d.style.transform = 'scale(0.95) rotateY(0deg)';
        setTimeout(() => vehicle3d.style.transform = 'scale(1) rotateY(0deg)', 200);
    }
}

function updateCustomizerPrice() {
    const vehicle = vehicleData[customizerState.model];
    let basePrice = vehicle.basePrice;
    let accessoriesTotal = 0;
    customizerState.accessories.forEach(accessory => {
        accessoriesTotal += accessoryPrices[accessory];
    });
    const totalPrice = basePrice + accessoriesTotal;
    document.getElementById('basePrice').textContent = `Bs ${basePrice.toLocaleString('es-BO')}`;
    document.getElementById('accessoriesTotal').textContent = `Bs ${accessoriesTotal.toLocaleString('es-BO')}`;
    document.getElementById('totalPrice').textContent = `Bs ${totalPrice.toLocaleString('es-BO')}`;
}

function rotateVehicle(direction) {
    const vehicle3d = document.querySelector('.vehicle-3d');
    if ('vibrate' in navigator) navigator.vibrate(40);
    if (direction === 'left') {
        vehicle3d.style.transform = 'scale(0.9) rotateY(-20deg)';
    } else {
        vehicle3d.style.transform = 'scale(0.9) rotateY(20deg)';
    }
    setTimeout(() => vehicle3d.style.transform = 'scale(1) rotateY(0deg)', 300);
}

function requestQuote() {
    const vehicle = vehicleData[customizerState.model];
    const accessories = customizerState.accessories.map(acc => {
        const labels = {
            sunroof: 'Techo panorámico',
            leather: 'Asientos de cuero premium',
            sound: 'Sistema de sonido premium',
            autopilot: 'Piloto automático avanzado'
        };
        return `${labels[acc]} (Bs ${accessoryPrices[acc].toLocaleString('es-BO')})`;
    }).join('\n') || 'Ninguno';
    const colorNames = {
        white: 'Blanco',
        black: 'Negro',
        silver: 'Plateado',
        blue: 'Azul',
        red: 'Rojo',
        green: 'Verde Quantum'
    };
    const accessoriesTotal = customizerState.accessories.reduce((sum, acc) => sum + accessoryPrices[acc], 0);
    const totalPrice = vehicle.basePrice + accessoriesTotal;
    if ('vibrate' in navigator) navigator.vibrate([100, 50, 100, 50, 100]);
    const message = `
🚗 COTIZACIÓN QUANTUM MOTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Modelo: ${vehicle.name}
🎨 Color: ${colorNames[customizerState.color]}

✨ Accesorios:
${accessories}

💰 RESUMEN
━━━━━━━━━━━━━━━━━━━━
Base:       Bs ${vehicle.basePrice.toLocaleString('es-BO')}
Accesorios: Bs ${accessoriesTotal.toLocaleString('es-BO')}
━━━━━━━━━━━━━━━━━━━━
TOTAL:      Bs ${totalPrice.toLocaleString('es-BO')}

¡Gracias por tu interés!
    `;
    alert(message);
    scrollToSection('contacto');
}

function submitContact(event) {
    event.preventDefault();
    if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
    alert('¡Gracias! Nos pondremos en contacto pronto.');
    event.target.reset();
}

function initAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.vehicle-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

console.log('💚 Quantum Motors - Sistema Interactivo Cargado');
console.log('📍 Precios en Bolivianos (Bs)');
console.log('⚡ Gasolina: Bs', FUEL_PRICE_BS, '/litro');
console.log('🔌 Electricidad: Bs', ELECTRICITY_PRICE_BS, '/kWh');
