# ✈️ Aerolíneas Angelicales

Aplicación web interactiva para la búsqueda, visualización y reservación de vuelos de **Aerolíneas Angelicales**. Desarrollada como una Single Page Application (SPA) moderna, rápida y responsiva utilizando **React** y **Vite**.

---

## 📋 Características Principales

* **Búsqueda y Filtrado de Vuelos (`FlightSearch`):** Interfaz intuitiva para buscar vuelos según origen, destino, fechas o preferencias del pasajero.
* **Catálogo Dinámico de Vuelos (`FlightCard`):** Presentación detallada de cada vuelo disponible (horarios, rutas, precios y disponibilidad) alimentada por datos estructurados (`flightsData.js`).
* **Sistema de Reservación (`BookingModal`):** Ventana modal interactiva para completar el proceso de reserva de boletos sin recargar la página.
* **Navegación Fluida (`navbar`):** Barra de navegación superior limpia e integrada con la identidad visual de la aerolínea.
* **Diseño Moderno y Responsivo:** Estilos personalizados mediante CSS modular y adaptable a distintos dispositivos.

---

## 🛠️ Tecnologías Utilizadas

* **Framework / Librería UI:** [React](https://react.dev/) (JSX, Hooks, Estado local)
* **Entorno de Desarrollo y Empaquetador:** [Vite](https://vitejs.dev/)
* **Estilos:** CSS3 (`App.css`, `index.css`)
* **Calidad de Código:** ESLint (`eslint.config.js`)
* **Gestor de Paquetes:** npm

---

## 📂 Estructura del Proyecto

El repositorio sigue una arquitectura limpia basada en componentes y separación de datos:

```text
Aerol-neas-Angelicales/
├── public/
│   ├── favicon.svg              # Ícono de la pestaña del navegador
│   └── icons.svg                # Recursos vectoriales públicos
├── src/
│   ├── assets/
│   │   ├── hero.png             # Imagen principal del banner (Hero)
│   │   ├── react.svg            # Logo de React
│   │   └── vite.svg             # Logo de Vite
│   ├── components/
│   │   ├── BookingModal.jsx     # Modal interactivo para reservar vuelos
│   │   ├── FlightCard.jsx       # Tarjeta individual con información del vuelo
│   │   ├── FlightSearch.jsx     # Buscador y filtros de vuelos
│   │   └── navbar.jsx           # Barra de navegación principal
│   ├── data/
│   │   └── flightsData.js       # Catálogo y datos simulados de los vuelos
│   ├── App.css                  # Estilos de los componentes principales
│   ├── App.jsx                  # Componente raíz e integración de vistas
│   ├── index.css                # Estilos globales y variables base
│   └── main.jsx                 # Punto de entrada de React en el DOM
├── .gitignore                   # Archivos ignorados por Git
├── eslint.config.js             # Configuración de reglas de ESLint
├── index.html                   # Plantilla HTML principal
├── package.json                 # Dependencias y scripts del proyecto
└── vite.config.js               # Configuración de Vite
```

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu máquina local:

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm`.

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Alexis4rias/Aerol-neas-Angelicales.git
   ```

2. **Entrar a la carpeta del proyecto:**
   ```bash
   cd Aerol-neas-Angelicales
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   Ingresa a la URL que aparece en tu terminal (por defecto suele ser `http://localhost:5173/`).

---

## 📜 Scripts Disponibles

En el archivo `package.json` se encuentran configurados los siguientes comandos:

* `npm run dev` — Levanta el servidor de desarrollo con Hot Module Replacement (HMR).
* `npm run build` — Compila y optimiza la aplicación para producción en la carpeta `dist/`.
* `npm run lint` — Ejecuta ESLint para revisar la calidad y el formato del código.
* `npm run preview` — Levanta un servidor local para previsualizar la versión compilada de producción.

---

## 👤 Autor

* **Jesús Alexis Arias Ricárdez** — [@Alexis4rias](https://github.com/Alexis4rias)

---

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos y de portafolio.