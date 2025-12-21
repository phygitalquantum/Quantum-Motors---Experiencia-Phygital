[README.md](https://github.com/user-attachments/files/24276966/README.md)
# Quantum Motors - Experiencia Phygital 2025 🚗⚡

Interfaz táctil profesional con Test Drive amplificado, generación de QR, y énfasis en ventajas de vehículos eléctricos en La Paz.

## ✨ Actualización Diciembre 2025

### 💰 Precios Actualizados (Bolivianos)

| Modelo | Categoría | Precio Base | Autonomía | Velocidad |
|--------|-----------|-------------|-----------|-----------|
| **E4** | Micromovilidad | **Bs 80,100** | 120 km | 45 km/h |
| **Nexus** | Compacto | **Bs 137,300** | 280 km | 90 km/h |
| **Kaiyi Platinum** | City Car Lujo | **Bs 202,000** | 350 km | 100 km/h |

### 🎯 Características Principales

#### 1. **Test Drive Amplificado** 🏆
La sección más importante del proyecto con:
- **Ventajas en La Paz**: 6 beneficios clave a 3,640 msnm
- **Comparativas visuales**: Eléctrico VS Gasolina
- **3 Opciones**: Físico, VR, AR
- **Formulario completo**: Datos + validación
- **Generación QR**: Ticket digital instantáneo
- **WhatsApp share**: Compartir reserva

#### 2. **Tipografía Tecnológica**
- **Inter**: Sans-serif moderna (body)
- **Space Grotesk**: Display tech (títulos)
- Más legible y profesional

#### 3. **Imágenes Oficiales**
- Integración con tuquantum.com
- Fotos reales de vehículos
- Fallback automático

#### 4. **Calculadora Interactiva**
- Wizard 3 pasos táctil
- Precios en Bolivianos
- Costos: Gasolina Bs 6.96/L, Electricidad Bs 0.88/kWh

## 🏔️ Test Drive: Ventajas en La Paz

### Por qué Eléctricos son Superiores en Altura

**⚡ Torque Instantáneo**
- 100% potencia desde 0 RPM
- Gasolina necesita revoluciones

**🫁 Sin Pérdida de Potencia**
- Gasolina: -25% a 3,640 msnm
- Eléctrico: 100% garantizado

**🔋 Regeneración**
- +30% energía en bajadas
- Topografía = aliada

**🌡️ Arranque en Frío**
- Instantáneo a -5°C
- Sin problemas matutinos

**💨 Cero Emisiones**
- 0 kg CO₂
- Aire limpio para La Paz

**💰 85% Más Eficiente**
- Ahorro real comprobado
- Menor costo por km

## 🎫 Sistema de Reservas Test Drive

### 3 Tipos de Experiencia

#### 🚗 Test Drive Físico
- ✅ Recorrido real 45 min
- ✅ Subidas y bajadas de La Paz
- ✅ Acompañamiento especialista
- ✅ Comparación directa

#### 🥽 Test Drive VR
- ✅ Simulación 3D La Paz (20 min)
- ✅ Prueba 3 modelos
- ✅ Datos tiempo real
- ✅ Sin vehículo físico necesario

#### 📱 Experiencia AR
- ✅ Visualización 3D escala real
- ✅ Cambio colores en vivo
- ✅ Explora interior/motor
- ✅ Sesión guiada showroom

### Generación de Ticket QR

**Datos capturados:**
- Nombre completo + CI
- Teléfono + Email
- Modelo de interés
- Fecha y hora
- Licencia de conducir
- Comentarios

**Ticket incluye:**
- Código QR único (QM-XXXXXXXX)
- Datos completos
- Logo Quantum
- Tipo de test drive
- Instrucciones

**Acciones:**
- 📥 Descargar ticket
- 📤 Compartir WhatsApp
- 💾 Guardado automático

## 🚀 Deploy GitHub Pages

```bash
# Opción 1: CLI
git init
git add .
git commit -m "Quantum Phygital v3.0 - Test Drive Amplificado"
git remote add origin https://github.com/[usuario]/quantum-phygital.git
git push -u origin main

# Habilitar Pages:
# Settings → Pages → Source: main branch
```

## 📱 Configuración Tablets Android

### Apps Modo Kiosk
1. **Fully Kiosk Browser** ⭐
2. Kiosk Browser Lockdown
3. SureLock

### Configuración Óptima
```
URL: https://[tu-repo].github.io
Orientación: Landscape
Pantalla: Completa
Auto-reload: 12 horas
Brillo: 100%
Timeout: Deshabilitado
```

### Hardware Recomendado
- Tablets 10-13 pulgadas
- Full HD (1920x1080) mínimo
- 4GB RAM
- Android 8.0+

## 🎨 Diseño

### Colores
```css
--quantum-primary: #00C896 (Verde Quantum)
--quantum-secondary: #1a2332 (Azul oscuro)
--quantum-accent: #667eea (Púrpura)
```

### Tipografía
```css
--font-primary: 'Inter' (Body)
--font-display: 'Space Grotesk' (Display)
```

### Componentes
- Cards interactivos con hover 3D
- Modales animados (fade + slide)
- Wizard multi-paso
- Generación QR dinámica
- Comparativas visuales
- Timeline animada

## 🔧 Personalización

### Actualizar Precios
```javascript
// En script.js
const vehicleData = {
    e4: { basePrice: 80100 },
    nexus: { basePrice: 137300 },
    kaiyi: { basePrice: 202000 }
};
```

### Cambiar Costos Energía
```javascript
const FUEL_PRICE_BS = 6.96;
const ELECTRICITY_PRICE_BS = 0.88;
```

### Modificar Colores
```css
:root {
    --quantum-primary: #00C896;
    --quantum-secondary: #1a2332;
}
```

## 📊 Datos Técnicos

### Consumo Eléctrico
- E4: ~8 kWh/100km
- Nexus: ~12 kWh/100km
- Kaiyi: ~14 kWh/100km

### Ahorro Estimado
- Combustible: 70-85%
- Mantenimiento: -60%
- Impuestos: Descuentos municipales

### Comparativa Altura (3,640 msnm)
| Factor | Gasolina | Eléctrico |
|--------|----------|-----------|
| Potencia | -25% | 100% |
| Arranque frío | Difícil | Instantáneo |
| Eficiencia | Baja | 85% superior |
| Torque | Progresivo | Inmediato |
| Regeneración | ❌ | ✅ +30% |

## 📁 Estructura del Proyecto

```
quantum-phygital/
├── index.html          (47KB - HTML completo)
│   ├── Hero animado
│   ├── Catálogo interactivo
│   ├── Calculadora wizard
│   ├── Personalizador 3D
│   ├── Test Drive amplificado ⭐
│   ├── Historia timeline
│   └── Footer
│
├── styles.css          (28KB - Estilos modernos)
│   ├── Tipografía Inter + Space Grotesk
│   ├── Componentes táctiles
│   ├── Modales animados
│   ├── Comparativas visuales ⭐
│   └── Responsive design
│
├── script.js           (22KB - Funcionalidad)
│   ├── Navegación smooth
│   ├── Filtros catálogo
│   ├── Calculadora interactiva
│   ├── Personalizador
│   ├── Test Drive + QR ⭐
│   └── Animaciones
│
└── README.md           (Este archivo)
```

## ✅ Mejoras v3.0

### Test Drive (NUEVO)
- ✨ Sección amplificada profesional
- 🏔️ Ventajas específicas La Paz
- 📊 Comparativas visuales llamativas
- 🎫 Generación QR automática
- 📱 Integración WhatsApp
- 🥽 Opciones VR/AR/Físico

### Precios
- ✨ Actualizados Diciembre 2025
- ✨ E4: Bs 80,100
- ✨ Nexus: Bs 137,300
- ✨ Kaiyi: Bs 202,000

### Diseño
- ✨ Tipografía moderna sans-serif
- ✨ Imágenes oficiales tuquantum.com
- ✨ Categorías correctas
- ✨ Animaciones fluidas

## 🎯 Casos de Uso

1. **Showroom Físico**: Tablets en stands ⭐
2. **Reservas Test Drive**: Sistema completo ⭐
3. **Eventos**: Pantallas interactivas
4. **Capacitación**: Material vendedores
5. **Web Corporativa**: Catálogo online

## 🔗 Enlaces

- **Catálogo**: https://tuquantum.com/catalogo-vehiculos/
- **Web Oficial**: https://tuquantum.com/
- **WhatsApp**: +591 76488888
- **Ubicación**: La Paz, Bolivia

## 📞 Soporte

Para consultas sobre implementación:
- **Email**: info@quantummotors.com
- **Teléfono**: +591 76488888
- **Horario**: Lun-Sáb 9:00-19:00

---

💚 **Versión 3.0 - Test Drive Amplificado**
Diciembre 2025 | Quantum Motors Bolivia

**Características Destacadas:**
- ⭐ Test Drive con QR
- ⭐ Ventajas en La Paz
- ⭐ Comparativas profesionales
- ⭐ 3 tipos de experiencia
- ⭐ Reservas automatizadas
