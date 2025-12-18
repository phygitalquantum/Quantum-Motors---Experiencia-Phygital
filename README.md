# Quantum Motors - Experiencia Phygital

Una experiencia digital inmersiva para mostroom físico de vehículos eléctricos Quantum Motors.

## 🚗 Características

### Catálogo Interactivo
- Exploración de modelos E4, Nexus y Kaiyi
- Filtros por categoría (Sedán, SUV, Compacto)
- Especificaciones técnicas detalladas
- Precios y comparativas

### Calculadora de Ahorro
- Compara tu vehículo actual con modelos Quantum
- Calcula ahorro mensual y anual en combustible
- Incluye costos de mantenimiento
- Proyecciones a 5 años

### Personalizador de Vehículos
- Selección de modelo (E4, Nexus, Kaiyi)
- 6 colores disponibles
- Accesorios premium:
  - Techo panorámico
  - Asientos de cuero premium
  - Sistema de sonido premium
  - Piloto automático avanzado
- Cotización en tiempo real

### Historia de la Marca
- Timeline interactivo desde 2015 hasta 2025
- Misión, Visión y Valores
- Hitos importantes de la compañía

### Formulario de Contacto
- Agenda tu test drive
- Información de contacto
- Horarios y ubicación

## 🎨 Diseño

- **Colores Corporativos**: Verde Quantum (#00C896) y tonos elegantes
- **Tipografía**: Montserrat para cuerpo, Playfair Display para títulos
- **Estilo**: Profesional, moderno y elegante
- **Responsive**: Adaptado para pantallas grandes (Android tablets/displays)

## 🚀 Despliegue en GitHub Pages

### Opción 1: Subir directamente

1. Crea un nuevo repositorio en GitHub
2. Sube los archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. Ve a Settings → Pages
4. En "Source", selecciona la rama `main` y carpeta `/ (root)`
5. Guarda y espera unos minutos
6. Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]/`

### Opción 2: Usando Git

```bash
# Inicializa el repositorio
git init

# Añade los archivos
git add .

# Crea el commit inicial
git commit -m "Initial commit: Quantum Motors Phygital Experience"

# Conecta con tu repositorio remoto
git remote add origin https://github.com/[tu-usuario]/[nombre-repo].git

# Sube los cambios
git branch -M main
git push -u origin main
```

Luego activa GitHub Pages desde la configuración del repositorio.

### Opción 3: Importar desde otra fuente

Si ya tienes el proyecto en otro lugar:

```bash
git clone https://github.com/[tu-usuario]/[nombre-repo-existente].git
cd [nombre-repo-existente]

# Copia los nuevos archivos aquí

git add .
git commit -m "Update: New Quantum Phygital Experience"
git push
```

## 📱 Configuración para Pantalla Android

### Modo Kiosk Recomendado

Para usar en showroom con tablet/pantalla Android:

1. **Instalación de navegador en modo kiosk:**
   - Kiosk Browser Lockdown
   - Fully Kiosk Browser
   - SureLock

2. **Configuración:**
   - URL de inicio: Tu GitHub Pages URL
   - Deshabilitar botones de navegación
   - Habilitar modo pantalla completa
   - Configurar auto-refresh cada 12 horas
   - Prevenir salir de la aplicación

3. **Optimizaciones:**
   - Orientación: Horizontal/Vertical según pantalla
   - Brillo automático deshabilitado (100%)
   - Timeout de pantalla: Nunca

## 🔧 Personalización

### Cambiar Colores

En `styles.css`, modifica las variables CSS:

```css
:root {
    --quantum-primary: #00C896;
    --quantum-primary-dark: #00A078;
    --quantum-secondary: #1a2332;
}
```

### Actualizar Vehículos

En `script.js`, edita el objeto `vehicleData`:

```javascript
const vehicleData = {
    modelo: {
        name: 'Nombre del Modelo',
        basePrice: 00000,
        consumption: 00, // kWh/100km
        range: 000,
        power: 000,
        acceleration: 0.0
    }
};
```

### Agregar Secciones

Simplemente añade nuevas secciones HTML siguiendo la estructura:

```html
<section id="nueva-seccion" class="nombre-clase-section">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Tag</span>
            <h2 class="section-title">Título</h2>
        </div>
        <!-- Contenido -->
    </div>
</section>
```

## 📊 Datos de Vehículos

### Modelos Quantum

| Modelo | Precio Base | Autonomía | Potencia | 0-100 km/h |
|--------|-------------|-----------|----------|------------|
| E4     | $28,500     | 420 km    | 150 kW   | 8.5s       |
| Nexus  | $42,800     | 500 km    | 200 kW   | 7.2s       |
| Kaiyi  | $22,900     | 380 km    | 120 kW   | 9.8s       |

### Accesorios

| Accesorio | Precio |
|-----------|--------|
| Techo panorámico | $2,500 |
| Asientos cuero premium | $1,800 |
| Sistema sonido premium | $1,200 |
| Piloto automático | $3,500 |

## 🌐 Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid, Animations)
- JavaScript ES6+ (Vanilla JS, no frameworks)
- Google Fonts (Montserrat, Playfair Display)
- SVG para iconos y gráficos

## 📱 Responsive

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🎯 Casos de Uso

1. **Showroom Físico**: Pantalla interactiva para clientes
2. **Eventos**: Presentación en ferias y exposiciones
3. **Web Corporativa**: Catálogo online completo
4. **Capacitación**: Material de entrenamiento para vendedores

## 🔒 Licencia

© 2025 Quantum Motors. Todos los derechos reservados.

## 👥 Contacto

Para soporte o consultas:
- Email: info@quantummotors.com
- Teléfono: +591 2 234 5678
- Dirección: Av. Principal 123, La Paz, Bolivia

---

**Desarrollado con ❤️ para revolucionar la movilidad eléctrica en América Latina**
