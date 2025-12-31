💬 Angular Chat App

Aplicación web de mensajería desarrollada en Angular que permite crear contactos, enviar mensajes, buscar conversaciones y administrar chats de forma persistente usando LocalStorage.

🚀 Tecnologías utilizadas

Angular 17+

TypeScript

Angular Signals

Angular Router

FontAwesome

HTML5 / CSS3

LocalStorage

📂 Estructura del proyecto
src/app/
│
├── chats-component/ → Vista principal de chats
├── chat-detail-component/ → Detalle de conversación
├── new-chat-component/ → Crear nuevo chat
├── add-new-contact/ → Formulario agregar contacto
├── messages-list/ → Lista de mensajes
├── search-bar/ → Barra de búsqueda
├── services/
│ └── chat.ts → Lógica principal y estado de chats
├── interfaces/
│ ├── chat.ts
│ └── message.ts
└── app.routes.ts → Definición de rutas

🧭 Rutas de la aplicación
Ruta Descripción
/chats Lista de chats y panel de mensajes
/chats/:id Detalle del chat seleccionado
/nuevo Crear nuevo contacto
\*\* Redirección a /chats

🧩 Funcionalidades principales

✔ Crear contactos
✔ Eliminar contactos
✔ Enviar y eliminar mensajes
✔ Búsqueda de contactos en tiempo real
✔ Persistencia de datos con LocalStorage
✔ Diseño tipo aplicación de chat
✔ Arquitectura basada en Signals

🛠️ Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/USUARIO/NOMBRE_REPO.git
cd NOMBRE_REPO
2️⃣ Instalar dependencias
npm install
3️⃣ Ejecutar la aplicación
ng serve
Abrir en el navegador:
http://localhost:4200

🧪 Cómo probar la app

Ingresar a /chats

Crear un nuevo contacto

Seleccionar un contacto

Enviar mensajes

Probar la barra de búsqueda

Recargar la página y comprobar persistencia

🧠 Descripción técnica

La aplicación utiliza Angular Signals para manejar el estado global de los chats desde ChatService, con persistencia automática en LocalStorage.
El diseño se basa en una estructura de panel izquierdo (contactos) y panel derecho (mensajes) similar a aplicaciones de mensajería reales.

👨‍💻 Créditos
TP Final Integrador de Angular
Autor: Pablo Caparelli
Diplomatura en Professional Full-Stack Developer
Comisión 999201564
