# 🌿 Las Verde - Jugos 100% Naturales

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-9.16.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-1.57.1-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

  **Aplicación Web Institucional y Catálogo de Productos**  
  *Proyecto desarrollado para un emprendimiento real y reconocido dentro del **Top 10** del curso de ReactJS en Coderhouse.*

  [🌐 Ver Demo en Vivo](https://las-verde.vercel.app/) • [🌐 Sitio Web Oficial](https://lasverde.com.ar)

</div>

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

- **Frontend**: [React.js](https://reactjs.org/) (Create React App)
- **Ruteo**: [React Router Dom v6](https://reactrouter.com/) (implementado con `HashRouter` para compatibilidad de despliegue)
- **Estilos**: [Sass (SCSS)](https://sass-lang.com/) con arquitectura modular de componentes y [Normalize.css](https://necolas.github.io/normalize.css/)
- **Base de Datos / BaaS**: [Firebase Firestore](https://firebase.google.com/)
- **Iconos**: [React Icons](https://react-icons.github.io/react-icons/)
- **Despliegue**: [Vercel](https://vercel.com/)

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
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavobaranda/) 
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/GustavoBaranda)

- **Melisa Caputo**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/melisa-caputo/)

---

<div align="center">
  <sub>Desarrollado con ❤️ para <b>Las Verde</b></sub>
</div>