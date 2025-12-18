[README.md](https://github.com/user-attachments/files/24226905/README.md)
# Quantum Motors - Experiencia Phygital Interactiva 🚗⚡

Interfaz táctil estilo tablet para showroom con interacciones como menú de restaurante digital.

## ✨ NUEVO: Interactividad Tipo Tablet

### 🎯 Características Interactivas
- **Cards táctiles** con animaciones (como menú de comida)
- **Wizard paso a paso** para calculadora
- **Feedback visual** inmediato en cada toque
- **Vibración háptica** en dispositivos compatibles
- **Transiciones suaves** con efectos bounce

## 💰 Precios en Bolivianos (Bs)

| Modelo | Precio Base | Equivalente USD |
|--------|-------------|-----------------|
| **E4** | Bs 197,100 | ≈ $28,500 |
| **Nexus** | Bs 296,360 | ≈ $42,800 |
| **Kaiyi** | Bs 158,530 | ≈ $22,900 |

### Costos de Combustible
- ⛽ **Gasolina**: Bs 6.96 / litro
- 🔌 **Electricidad**: Bs 0.88 / kWh

## 🎮 Módulos Interactivos

### 1️⃣ Catálogo Táctil
- Cards grandes con hover effect
- Filtros animados con emojis (🌟 🚗 🚙 🚕)
- Link directo a: https://tuquantum.com/catalogo-vehiculos/
- Indicador "Toca para ver detalles"

### 2️⃣ Calculadora Wizard
**Paso 1**: Selecciona tu vehículo actual
- 6 opciones con consumo visible
- Cards grandes tipo menú

**Paso 2**: Elige tu Quantum
- Badges: Más Vendido, Premium, Nuevo
- Specs en cada card

**Paso 3**: ¿Cuánto conduces?
- Slider grande interactivo
- Botones rápidos: 1000, 1500, 2000, 2500 km
- Display prominente de kilómetros

**Resultados Animados**:
- Ahorro mensual/anual en Bs
- Proyección 5 años
- Incluye mantenimiento

### 3️⃣ Personalizador 3D
- Paleta de 6 colores táctil
- 4 accesorios premium
- Precio en tiempo real
- Botones de rotación

## 🚀 Deploy a GitHub Pages

```bash
git init
git add .
git commit -m "Quantum Interactive Experience"
git remote add origin https://github.com/[usuario]/[repo].git
git push -u origin main
```

Luego: Settings → Pages → Source: main

## 📱 Configuración para Tablet Android

### Apps Recomendadas
- **Fully Kiosk Browser** ⭐ (recomendado)
- Kiosk Browser Lockdown
- SureLock

### Configuración Óptima
```
URL: tu-github-pages-url
Modo: Pantalla completa
Orientación: Landscape
Auto-reload: 12 horas
Brillo: 100%
```

### Hardware Recomendado
- Tablet 10-13"
- Full HD (1920x1080+)
- 4GB RAM
- Android 8.0+

## 🎨 Personalización Rápida

### Cambiar Colores
```css
:root {
    --quantum-primary: #00C896;
    --quantum-secondary: #1a2332;
}
```

### Actualizar Precios (Bs)
```javascript
const vehicleData = {
    e4: { basePrice: 197100 },
    nexus: { basePrice: 296360 },
    kaiyi: { basePrice: 158530 }
};
```

### Actualizar Costos
```javascript
const FUEL_PRICE_BS = 6.96;
const ELECTRICITY_PRICE_BS = 0.88;
```

## 📊 Datos Técnicos

### Quantum Models

| Model | Range | Power | 0-100 | Consumption |
|-------|-------|-------|-------|-------------|
| E4 | 420km | 150kW | 8.5s | 15 kWh/100km |
| Nexus | 500km | 200kW | 7.2s | 18 kWh/100km |
| Kaiyi | 380km | 120kW | 9.8s | 13 kWh/100km |

## 🌐 Tecnologías

- HTML5, CSS3, JavaScript ES6+
- Grid, Flexbox, Animations
- Google Fonts (Montserrat, Playfair Display)
- SVG icons inline
- Vanilla JS (sin frameworks)

## 📁 Archivos

```
quantum-phygital/
├── index.html      (34KB - Estructura)
├── styles.css      (34KB - Estilos táctiles)
├── script.js       (16KB - Interacciones)
└── README.md       (Este archivo)
```

## 🎯 Casos de Uso

1. 🏬 Showroom físico (tablets en stands)
2. 🎪 Eventos y ferias
3. 🌐 Website corporativo
4. 📚 Capacitación de vendedores
5. 🛒 Puntos de venta

## ✅ Mejoras vs Versión Anterior

- ✨ Interactividad tipo menú de tablet
- 💰 Precios en Bolivianos
- 🎯 Calculadora wizard 3 pasos
- 🔗 Link a catálogo tuquantum.com
- 📱 Feedback háptico
- 🎨 Animaciones mejoradas
- 👆 Botones más grandes
- 🎪 Efectos hover/active

## 📞 Contacto

- **Web**: https://tuquantum.com
- **Catálogo**: https://tuquantum.com/catalogo-vehiculos/
- **Email**: info@quantummotors.com
- **Tel**: +591 2 234 5678
- **Ubicación**: La Paz, Bolivia

---

💚 **Versión 2.0 Interactiva** - Diciembre 2025  
Desarrollado para revolucionar la movilidad eléctrica en Bolivia
