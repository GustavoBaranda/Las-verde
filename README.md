# 🌿 Las Verde - Jugos 100% Naturales

<p>
  <img align="left" src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img align="left" src="https://img.shields.io/badge/Firebase-9.16.0-FFCA28?style=flat&logo=firebase&logoColor=black" alt="Firebase" />
  <img align="left" src="https://img.shields.io/badge/Sass-1.57.1-CC6699?style=flat&logo=sass&logoColor=white" alt="Sass" />
  <img align="left" src="https://img.shields.io/badge/React_Router-v6-CA4245?style=flat&logo=react-router&logoColor=white" alt="React Router" />
  <img align="left" src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
</p>
<br clear="all">

**Aplicación Web Institucional y Catálogo de Productos**  
*Proyecto desarrollado para un emprendimiento real y reconocido dentro del **Top 10** del curso de ReactJS en Coderhouse.*

[🌐 Ver Demo en Vivo](https://las-verde.vercel.app/)

---

## 📌 Descripción del Proyecto

**Las Verde** es una empresa dedicada a la comercialización de jugos 100% naturales, prensados en frío y libres de conservantes. 

Esta aplicación web fue diseñada y desarrollada para brindar una experiencia de usuario moderna, fluida e intuitiva, permitiendo a los usuarios conocer la historia y valores de la marca, explorar el catálogo de productos con datos en tiempo real y comunicarse directamente con el equipo a través de formularios integrados y WhatsApp.

---

## ✨ Características Principales

- 🏠 **Inicio (Home)**: Slider / Carousel interactivo de imágenes, banners informativos sobre la propuesta de valor y acceso directo a secciones clave.
- 📖 **Quiénes Somos**: Reseña histórica de la marca, misión, visión y una sección explicativa del **Proceso Productivo** artesanal.
- 🧃 **Catálogo de Productos**:
  - Conexión directa a **Firebase Firestore** para obtener el catálogo actualizado en tiempo real.
  - Modales emergentes (`ModalDetail`) para visualizar ingredientes, beneficios y detalles de cada jugo.
- 📩 **Contacto y Ubicación**:
  - Formulario con validaciones personalizadas mediante un custom hook (`useForm`).
  - Envío automático de consultas vía API (FormSubmit) y redirección a una vista de confirmación.
  - Mapa interactivo integrado para ubicar el local/punto de retiro.
- 💬 **Atención Directa**: Botón flotante interactivo de **WhatsApp** para consultas rápidas.
- 📱 **Diseño Responsive**: Interfaz adaptada a dispositivos móviles, tablets y monitores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

### 💻 Frontend
<p>
  <img align="left" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React.js" />
  <img align="left" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
  <img align="left" src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
</p>
<br clear="all">

### 🎨 Estilos
<p>
  <img align="left" src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white" alt="Sass (SCSS)" />
  <img align="left" src="https://img.shields.io/badge/Normalize.css-000000?style=flat&logo=css3&logoColor=white" alt="Normalize.css" />
</p>
<br clear="all">

### 🗺️ Ruteo
<p>
  <img align="left" src="https://img.shields.io/badge/React_Router_v6-CA4245?style=flat&logo=react-router&logoColor=white" alt="React Router v6" />
</p>
<br clear="all">

### 🔥 Backend / BaaS
<p>
  <img align="left" src="https://img.shields.io/badge/Firebase_Firestore-FFCA28?style=flat&logo=firebase&logoColor=black" alt="Firebase Firestore" />
</p>
<br clear="all">

### 🚀 Despliegue
<p>
  <img align="left" src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
</p>
<br clear="all">

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/             # Imágenes y recursos estáticos
├── Components/         # Componentes reutilizables e interfaz de usuario
│   ├── Footer/         # Pie de página con enlaces y redes
│   ├── NavBar/         # Barra de navegación superior responsive
│   ├── Pages/          # Vistas principales de la aplicación
│   │   ├── About/      # Historia, Misión y Proceso Productivo
│   │   ├── Contacts/   # Formulario de contacto y Mapa
│   │   ├── Home/       # Slider y Banners de portada
│   │   └── Products/   # Catálogo dinámico y Modal de detalle
│   ├── ScrollToTop/    # Helper para reseteo de scroll entre rutas
│   ├── Spinner/        # Indicador visual de carga
│   └── WhatsApp/       # Botón flotante de contacto directo
├── hooks/              # Custom Hooks (useForm)
├── styles/             # Archivos de hojas de estilo Sass (.scss)
├── utils/              # Configuración de Firebase y auxiliares
├── App.js              # Componente principal y configuración de rutas
└── index.js            # Punto de entrada de la aplicación
```

---

## ⚙️ Instalación y Configuración Local

Si deseas clonar y ejecutar este proyecto de manera local, sigue estos pasos:

### Pre-requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 14 o superior) y `npm` o `yarn`.

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/GustavoBaranda/Las-verde.git
   cd Las-verde
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar las Variables de Entorno**:
   Crea un archivo `.env` en la raíz del proyecto tomando como base el archivo `.env.example`:
   ```env
   REACT_APP_FIREBASE_API_KEY=tu_api_key_aqui
   REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
   REACT_APP_FIREBASE_PROJECT_ID=tu_project_id_aqui
   REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
   REACT_APP_FIREBASE_APP_ID=tu_app_id_aqui
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:3000`.

5. **Generar la versión de producción**:
   ```bash
   npm run build
   ```

---

## 👥 Creadores y Contacto

Proyecto realizado por:

- **Gustavo Baranda**  
  <img align="left" src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <a href="https://www.linkedin.com/in/gustavobaranda/"> </a>
  <img align="left" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
  <a href="https://github.com/GustavoBaranda"> </a>
<br clear="all">

- **Melisa Caputo**  
  <img align="left" src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <a href="https://www.linkedin.com/in/melisa-caputo/"> </a>
<br clear="all">

---

<div align="center">
  <sub>Desarrollado con ❤️ para <b>Las Verde</b></sub>
</div>