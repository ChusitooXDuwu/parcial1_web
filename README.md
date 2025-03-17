# Parcial 1 - Web App

## Especificaciones de la Aplicación

### Librerías Usadas
- **Framework:** React 19.0.0
- **UI Library:** React-Bootstrap
- **Preprocesamiento de estilos:** Sass
- **Manejo de peticiones HTTP:** Axios
- **Manejo de estados de consultas a API:** React Query
- **Ruteo de la aplicación:** React Router
- **Internacionalización:** React Intl

### Entorno de Desarrollo
- **Versión de Node.js:** 22.12.0
- **Versión de npm:** 10.9.0
- **Método de creación del proyecto:** Vite 6.2.0 (con TypeScript `tsx`)
- **Sistema operativo:** Debian Bookworm (devcontainer)

## Rutas de la Aplicación

| Ruta      | Descripción |
|-----------|-------------|
| `/`       | Root |
| `/login`  | Página de inicio de sesión |
| `/home`   | Página principal con navegación a tiendas, menú y carrito |
| `/menu`   | Vista de detalle del menú |
| `/stores` | Vista de detalle de tiendas |
| `/cart`   | Vista de detalle del carrito |

## Pasos para la Ejecución de la Aplicación

### Ver la Aplicación Desplegada
Puedes interactuar con la versión final ingresando al siguiente enlace: **[Parcial 1 Web - GH Pages](#)**.

### Ejecutar la Aplicación en tu Máquina Local

1. Instalar las dependencias
   ```
   npm i
   ```

2. Ejecutar el proyecto en modo desarrollo
   ```
   npm run dev
   ```

3. Compilar para Producción
   ```
   npm run build
   ```

4. Visualizar la aplicación en modo producción
   ```
   npm run preview
   ```

Navega a la URL generada en la terminal para ver la versión de producción.

## Proceso de Desarrollo del Parcial

### Preparación
Antes del parcial, se tomaron medidas para optimizar el desarrollo:

- Configuración del proyecto con todas las librerías necesarias
- Elección de herramientas:
  - **TypeScript:** Para evitar errores de tipado y mejorar mantenibilidad
  - **React Query:** Para manejar el estado de las consultas a la API sin useEffect
  - **React Intl:** Para manejar la internacionalización con FormattedMessage y useIntl
  - **Sass:** Para personalizar Bootstrap y organizar estilos
  - **Axios:** Para realizar peticiones HTTP de forma más limpia

### Estrategia de Desarrollo
Dado el tiempo limitado, se priorizó:

- Navegación y estructura de la app (React Router)
- Interfaz funcional (UI basada en Bootstrap)
- Carga de datos desde API mock (Mockaroo vía Axios y React Query)
- Diseño similar a los mockups
- Internacionalización (React Intl)

## Estructura del Código

```
📦 src
 ┣ 📂 assets/          # Imágenes y recursos estáticos
 ┣ 📂 contexts/        # Manejo de idioma (React Context)
 ┣ 📂 locales/         # Archivos de traducción (en.ts, es.ts)
 ┣ 📂 pages/           # Páginas principales de la app
 ┃ ┣ 📂 CartPage/      # Página de carrito
 ┃ ┣ 📂 HomePage/      # Página principal
 ┃ ┣ 📂 LoginPage/     # Página de login
 ┃ ┣ 📂 MenuPage/      # Página del menú
 ┃ ┣ 📂 StoresPage/    # Página de tiendas
 ┣ 📜 App.tsx          # Ruteo de la aplicación
 ┣ 📜 main.tsx         # Entrada principal de React
 ┗ 📜 vite.config.ts   # Configuración de Vite
```

## Desarrollo de Componentes

### LoginPage
- Dos columnas:
  - Izquierda: Splash screen con logo y branding
  - Derecha: Formulario con validación de email y contraseña
- Validación:
  - `useState` para manejar valores del formulario
  - La contraseña debe tener entre 5 y 8 caracteres
  - Uso de `event.preventDefault()` en el `onSubmit` del formulario
- Navegación:
  - `useNavigate` para redirigir a `/home` tras el login exitoso

### HomePage
- Estructura:
  - Container con fondo de imagen (`background-image` con `comida_bg.jpg`)
  - Card con tres opciones (Stores, Menu, Cart), cada una con ícono (`cartLogo.png`)
- Navegación con `useNavigate`:
  - Cada opción redirige a su vista correspondiente

### CartPage
- Header con Navbar
  - Título "Mi Carrito" con `cartLogo.png` a los lados
  - `FormattedMessage` para internacionalización del título
- Carrusel de imágenes
  - Carousel de Bootstrap mostrando elementos del API
- Tarjetas de productos
  - Card con imagen, título y descripción
- Carga de datos con `useQuery` (React Query)
  - Llamado a `https://my.api.mockaroo.com/comida.json?key=936621f0`
- Manejo de estados:
  - `isLoading`: Muestra Spinner
  - `isError`: Muestra Alert
  - `data.length === 0`: Muestra mensaje "Tu carrito está vacío"

### MenuPage
- Diseño idéntico a CartPage, cambiando solo:
  - Título: "Menú" (`menuPage.title` en `en.ts` y `es.ts`)
  - API: Carga datos de menú en vez de carrito
  - Internacionalización: "menuPage.loading", "menuPage.error", etc.

### StoresPage
- Diseño idéntico a CartPage y MenuPage, cambiando solo:
  - Título: "Tiendas" (`storesPage.title` en `en.ts` y `es.ts`)
  - API: `https://my.api.mockaroo.com/tiendas.json?key=936621f0`
  - Internacionalización: "storesPage.loading", "storesPage.error", etc.

## Internacionalización
La aplicación responde automáticamente al idioma del navegador y permite cambiarlo manualmente con botones en la interfaz.

- Implementado con React Intl, usando:
  - `IntlProvider` en `App.tsx` para detectar idioma del navegador
  - `FormattedMessage` en todos los textos estáticos
  - `useIntl()` para textos dinámicos
  - Contexto (`LocaleContext.tsx`) para cambiar idioma dinámicamente

Ejemplo:
```jsx
<FormattedMessage id="cartPage.title" />
```
Esto muestra "Mi Carrito" en español y "My Cart" en inglés.

## Resumen de Tecnologías Usadas
- ✅ React Router para ruteo
- ✅ React Query + Axios para llamadas a API
- ✅ Bootstrap + Sass para estilos
- ✅ React Intl para internacionalización

## Resultados Finales
- ✔️ Aplicación funcional con navegación y autenticación básica
- ✔️ Diseño similar a los mockups
- ✔️ Consumo de API con React Query
- ✔️ Internacionalización dinámica basada en idioma del navegador
