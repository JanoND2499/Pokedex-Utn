# Pokédex UTN 🚀

Una aplicación web interactiva de Pokédex construida con **React** y **Vite**, que consume datos en tiempo real desde la API pública [PokeAPI](https://pokeapi.co/). El proyecto incluye paginación, búsqueda avanzada, guardado de favoritos y visualización detallada de cada pokémon en un modal.

---

## 📋 Características Principales

*   **Listado Dinámico**: Renderiza un catálogo interactivo de Pokémon consumiendo directamente desde la PokeAPI.
*   **Paginación Eficiente**: Navegación fluida de 25 en 25 Pokémons (evitando sobrecargar el cliente).
*   **Filtro y Búsqueda en Tiempo Real**: Barra de búsqueda interactiva para filtrar por nombre tanto en la lista general como en la sección de favoritos.
*   **Sección de Favoritos ⭐**: Agrega o elimina tus Pokémon preferidos y visualízalos en una sección dedicada.
*   **Modal de Detalles**: Al hacer clic en cualquier tarjeta, se muestra información detallada (ID, nombre, clasificación, etc.).
*   **Diseño Premium**: Interfaz moderna, responsiva y amigable con efectos de transición y animaciones interactivas.

---

## 🛠️ Tecnologías Utilizadas

*   **React 19** (hooks: `useState`, `useEffect`)
*   **Vite** (como herramienta de empaquetado y servidor de desarrollo ultra rápido)
*   **Vanilla CSS** (estilos personalizados y adaptables)
*   **PokeAPI** (fuente de datos externa)

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Sigue estos sencillos pasos para clonar e iniciar el entorno de desarrollo en tu máquina:

### 1. Requisitos Previos

Asegúrate de tener instalado:
*   [Node.js](https://nodejs.org/) (versión LTS recomendada)
*   [npm](https://www.npmjs.com/) (generalmente viene con Node.js)

### 2. Ubicarte en el directorio del proyecto

Abre tu terminal en la carpeta principal del proyecto:
```bash
cd mi-proyecto-react
```

### 3. Instalar las dependencias

Instala los paquetes necesarios definidos en el archivo `package.json`:
```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

Ejecuta el servidor local de Vite:
```bash
npm run dev
```

Una vez ejecutado, verás en tu consola un enlace local similar a:
`http://localhost:5173/` o `http://localhost:5174/`

Abre ese enlace en tu navegador web para ver y utilizar la aplicación.

### 5. Compilar para producción (Opcional)

Si deseas empaquetar la aplicación optimizada para producción:
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist`.

---

## 📂 Estructura de Directorios Clave

*   [App.jsx](file:///c:/Users/janod/OneDrive/Desktop/Ejercicios%20UTN/TpFinalOpcB/ProyectoReactTPOpcB/mi-proyecto-react/src/App.jsx): Componente principal que maneja el estado global, paginación, consumo de la PokeAPI y lógica de favoritos.
*   [Navbar.jsx](file:///c:/Users/janod/OneDrive/Desktop/Ejercicios%20UTN/TpFinalOpcB/ProyectoReactTPOpcB/mi-proyecto-react/src/components/Navbar.jsx): Barra de navegación superior con accesos rápidos a Inicio y Favoritos (con contador de favoritos interactivo).
*   [Card.jsx](file:///c:/Users/janod/OneDrive/Desktop/Ejercicios%20UTN/TpFinalOpcB/ProyectoReactTPOpcB/mi-proyecto-react/src/components/Card.jsx): Tarjeta reutilizable encargada de renderizar la información de cada Pokémon y sus acciones.
*   [Footer.jsx](file:///c:/Users/janod/OneDrive/Desktop/Ejercicios%20UTN/TpFinalOpcB/ProyectoReactTPOpcB/mi-proyecto-react/src/components/Footer.jsx): Pie de página informativo.
*   [App.css](file:///c:/Users/janod/OneDrive/Desktop/Ejercicios%20UTN/TpFinalOpcB/ProyectoReactTPOpcB/mi-proyecto-react/src/App.css): Hoja de estilos principal y diseño responsivo de la grilla de Pokémons.
