// QUANTUM MOTORS - Updated Prices in Bolivianos
const vehicleData = {
    e4: {
        name: 'Quantum E4',
        category: 'Auto Micromovilidad',
        basePrice: 80100,
        consumption: 8, // kWh/100km (estimated for micromovilidad)
        range: 120,
        power: 4,
        maxSpeed: 45,
        image: 'https://tuquantum.com/wp-content/uploads/2025/10/E4-MONTANERO.png'
    },
    nexus: {
        name: 'Quantum Nexus',
        category: 'Auto Compacto',
        basePrice: 137300,
        consumption: 12, // kWh/100km
        range: 280,
        power: 30,
        maxSpeed: 90,
        image: 'https://tuquantum.com/wp-content/uploads/2025/10/NEXUS.png'
    },
    kaiyi: {
        name: 'Kaiyi Platinum',
        category: 'City Car de Lujo',
        basePrice: 202000,
        consumption: 14, // kWh/100km
        range: 350,
        power: 40,
        maxSpeed: 100,
        image: 'https://tuquantum.com/wp-content/uploads/2025/10/Nexus-Plus-1.png'
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
    console.log('🚗 Quantum Motors - Sistema Actualizado');
    console.log('💰 Precios actualizados en Bolivianos');
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
    const savingsMonth = gasolineCostMonth - electricCostMonth;
    const savingsYear = savingsMonth * 12;
    const maintenanceSavingsYear = 8300;
    const totalSavingsYear = savingsYear + maintenanceSavingsYear;
    const savings5Years = totalSavingsYear * 5;
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
                <div class="result-label">Ahorro anual</div>
                <div class="result-value">Bs ${data.savingsYear.toLocaleString('es-BO', {minimumFractionDigits: 2})}</div>
            </div>
            <div class="result-highlight">
                <h3>🎉 Ahorro Total Anual</h3>
                <span class="big-savings">Bs ${data.totalSavingsYear.toLocaleString('es-BO')}</span>
                <p>Incluyendo mantenimiento</p>
            </div>
            <div class="result-highlight" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                <h3>💰 Proyección 5 Años</h3>
                <span class="big-savings">Bs ${data.savings5Years.toLocaleString('es-BO')}</span>
                <p>Al cambiar de ${data.competitor} a ${data.quantum}</p>
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
    const vehicle = vehicleData[customizerState.model];
    const previewImg = document.getElementById('vehiclePreviewImg');
    if (previewImg && vehicle.image) {
        previewImg.src = vehicle.image;
        previewImg.style.transform = 'scale(0.95)';
        setTimeout(() => previewImg.style.transform = 'scale(1)', 200);
    }
}

function updateCustomizerPrice() {
    const vehicle = vehicleData[customizerState.model];
    let basePrice = vehicle.basePrice;
    let accessoriesTotal = customizerState.accessories.reduce((sum, acc) => sum + accessoryPrices[acc], 0);
    const totalPrice = basePrice + accessoriesTotal;
    document.getElementById('basePrice').textContent = `Bs ${basePrice.toLocaleString('es-BO')}`;
    document.getElementById('accessoriesTotal').textContent = `Bs ${accessoriesTotal.toLocaleString('es-BO')}`;
    document.getElementById('totalPrice').textContent = `Bs ${totalPrice.toLocaleString('es-BO')}`;
}

function rotateVehicle(direction) {
    const previewImg = document.getElementById('vehiclePreviewImg');
    if ('vibrate' in navigator) navigator.vibrate(40);
    if (direction === 'left') {
        previewImg.style.transform = 'scale(0.9) rotateY(-10deg)';
    } else {
        previewImg.style.transform = 'scale(0.9) rotateY(10deg)';
    }
    setTimeout(() => previewImg.style.transform = 'scale(1) rotateY(0deg)', 300);
}

function requestQuote() {
    const vehicle = vehicleData[customizerState.model];
    const accessories = customizerState.accessories.map(acc => {
        const labels = {
            sunroof: 'Techo panorámico',
            leather: 'Asientos de cuero',
            sound: 'Sistema de sonido',
            autopilot: 'Piloto automático'
        };
        return `${labels[acc]} (Bs ${accessoryPrices[acc].toLocaleString('es-BO')})`;
    }).join('\n') || 'Ninguno';
    const accessoriesTotal = customizerState.accessories.reduce((sum, acc) => sum + accessoryPrices[acc], 0);
    const totalPrice = vehicle.basePrice + accessoriesTotal;
    if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
    const message = `
🚗 COTIZACIÓN QUANTUM MOTORS
━━━━━━━━━━━━━━━━━━━━
📋 ${vehicle.name}
🏷️ ${vehicle.category}

✨ Accesorios:
${accessories}

💰 RESUMEN
Base: Bs ${vehicle.basePrice.toLocaleString('es-BO')}
Extras: Bs ${accessoriesTotal.toLocaleString('es-BO')}
━━━━━━━━━━━━━━━━━━━━
TOTAL: Bs ${totalPrice.toLocaleString('es-BO')}

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
    document.querySelectorAll('.vehicle-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

console.log('💚 Quantum Motors - Actualizado 2025');
console.log('📍 E4: Bs 80,100 | Nexus: Bs 137,300 | Kaiyi: Bs 202,000');

// ============================================
// TEST DRIVE FUNCTIONALITY
// ============================================

let currentTestDriveType = '';

function openTestDriveForm(type) {
    currentTestDriveType = type;
    const modal = document.getElementById('testdriveModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    
    const titles = {
        physical: 'Reserva tu Test Drive Físico',
        vr: 'Reserva tu Experiencia VR',
        ar: 'Agenda tu Sesión AR'
    };
    
    const subtitles = {
        physical: 'Conduce un vehículo real en las calles de La Paz',
        vr: 'Experimenta la simulación 3D en realidad virtual',
        ar: 'Explora el vehículo en realidad aumentada'
    };
    
    modalTitle.textContent = titles[type];
    modalSubtitle.textContent = subtitles[type];
    document.getElementById('testdriveType').value = type;
    
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferredDate').setAttribute('min', today);
    
    modal.classList.add('active');
    
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

function closeTestDriveForm() {
    const modal = document.getElementById('testdriveModal');
    modal.classList.remove('active');
}

function submitTestDrive(event) {
    event.preventDefault();
    
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Get form data
    const formData = {
        type: document.getElementById('testdriveType').value,
        name: document.getElementById('fullName').value,
        ci: document.getElementById('ci').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        model: document.getElementById('vehicleModel').value,
        date: document.getElementById('preferredDate').value,
        time: document.getElementById('preferredTime').value,
        license: document.querySelector('input[name="license"]:checked').value,
        comments: document.getElementById('comments').value
    };
    
    // Generate ticket code
    const ticketCode = generateTicketCode();
    
    // Store reservation (in real app, send to server)
    const reservation = {
        ...formData,
        ticketCode: ticketCode,
        timestamp: new Date().toISOString()
    };
    
    // Close form modal
    closeTestDriveForm();
    
    // Show QR ticket
    setTimeout(() => {
        displayQRTicket(reservation);
    }, 300);
}

function generateTicketCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'QM-';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function displayQRTicket(reservation) {
    const qrModal = document.getElementById('qrModal');
    
    // Update ticket details
    const typeLabels = {
        physical: 'Test Drive Físico',
        vr: 'Test Drive VR',
        ar: 'Experiencia AR'
    };
    
    const modelLabels = {
        e4: 'Quantum E4',
        nexus: 'Quantum Nexus',
        kaiyi: 'Kaiyi Platinum',
        todos: 'Todos los modelos'
    };
    
    document.getElementById('ticketType').textContent = typeLabels[reservation.type];
    document.getElementById('ticketName').textContent = reservation.name;
    document.getElementById('ticketCI').textContent = reservation.ci;
    document.getElementById('ticketModel').textContent = modelLabels[reservation.model];
    document.getElementById('ticketDate').textContent = formatDate(reservation.date);
    document.getElementById('ticketTime').textContent = reservation.time;
    document.getElementById('ticketCode').textContent = reservation.ticketCode;
    
    // Generate QR Code
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous
    
    // QR Data string
    const qrData = `QUANTUM-TESTDRIVE
Código: ${reservation.ticketCode}
Nombre: ${reservation.name}
CI: ${reservation.ci}
Modelo: ${modelLabels[reservation.model]}
Fecha: ${formatDate(reservation.date)}
Hora: ${reservation.time}
Tipo: ${typeLabels[reservation.type]}`;
    
    // Generate QR using a simple method (in production, use a QR library)
    generateQRCode(qrContainer, qrData);
    
    // Show modal
    qrModal.classList.add('active');
    
    // Store in localStorage for later retrieval
    localStorage.setItem('lastTestDrive', JSON.stringify(reservation));
}

function generateQRCode(container, data) {
    // Simple QR code placeholder (in production, use qrcode.js or similar)
    const qrSize = 250;
    const qr = document.createElement('div');
    qr.style.width = qrSize + 'px';
    qr.style.height = qrSize + 'px';
    qr.style.background = 'white';
    qr.style.border = '2px solid #e5e7eb';
    qr.style.borderRadius = '12px';
    qr.style.display = 'flex';
    qr.style.alignItems = 'center';
    qr.style.justifyContent = 'center';
    qr.style.flexDirection = 'column';
    qr.style.padding = '1rem';
    qr.style.textAlign = 'center';
    
    // In production, replace this with actual QR generation
    qr.innerHTML = `
        <svg width="180" height="180" viewBox="0 0 180 180">
            <rect width="180" height="180" fill="white"/>
            <rect x="10" y="10" width="60" height="60" fill="black"/>
            <rect x="110" y="10" width="60" height="60" fill="black"/>
            <rect x="10" y="110" width="60" height="60" fill="black"/>
            <rect x="30" y="30" width="20" height="20" fill="white"/>
            <rect x="130" y="30" width="20" height="20" fill="white"/>
            <rect x="30" y="130" width="20" height="20" fill="white"/>
            <!-- More QR pattern here -->
            <text x="90" y="95" text-anchor="middle" font-size="10" fill="black">QR Code</text>
        </svg>
        <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #6b7280;">Código: ${data.split('Código: ')[1]?.split('\n')[0]}</p>
    `;
    
    container.appendChild(qr);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-BO', options);
}

function closeQRModal() {
    const qrModal = document.getElementById('qrModal');
    qrModal.classList.remove('active');
}

function downloadTicket() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
    
    alert('💾 Funcionalidad de descarga en desarrollo.\n\nPor ahora, puedes hacer una captura de pantalla del ticket.');
    
    // In production, generate PDF or image
}

function shareTicket() {
    const reservation = JSON.parse(localStorage.getItem('lastTestDrive'));
    
    if (!reservation) {
        alert('No se encontró información de reserva');
        return;
    }
    
    const message = `🚗 *RESERVA TEST DRIVE QUANTUM*

✅ Confirmado
📋 Código: ${reservation.ticketCode}
👤 Nombre: ${reservation.name}
🚘 Modelo: ${document.getElementById('ticketModel').textContent}
📅 Fecha: ${document.getElementById('ticketDate').textContent}
🕐 Hora: ${reservation.time}

📍 Showroom Quantum Motors, La Paz
📞 +591 76488888

¡Nos vemos pronto! 🔋`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

// Close modals on outside click
document.addEventListener('click', function(event) {
    const testdriveModal = document.getElementById('testdriveModal');
    const qrModal = document.getElementById('qrModal');
    
    if (event.target === testdriveModal) {
        closeTestDriveForm();
    }
    
    if (event.target === qrModal) {
        closeQRModal();
    }
});

// Close modals on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeTestDriveForm();
        closeQRModal();
    }
});

console.log('🎫 Test Drive module loaded - QR generation ready');
