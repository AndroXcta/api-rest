# Proyecto Final del Módulo Backend

## API REST de personajes mas poderosos del anime

Esta API te brinda acceso y gestión de personajes de fantasía épicos a través de solicitudes HTTP. Está construida con **Node.js**, utiliza el framework **Express**, incorpora **CORS** para permitir conexiones desde múltiples dominios y la librería **zod** para validar datos.

## Funcionalidades Destacadas

- **Consultar personajes:** Explora todos los personajes disponibles en nuestro épico catálogo.
- **Filtrar personajes:** Filtra personajes por su clase o raza.
- **Añadir personajes:** Agrega nuevos personajes al panteón de guerreros.
- **Editar personajes:** Modifica la información de personajes existentes.
- **Eliminar personajes:** Elimina personajes de la lista.

## Guía de Uso

Para empezar a utilizar la API, sigue estos pasos:

1. **Configuración Inicial:**

   - Asegúrate de tener Node.js instalado en tu sistema.
   - Clona este repositorio o descarga los archivos de la API.

2. **Instalación de Dependencias:**

   - Abre una terminal (ya sea externa o dentro de VScode) en la carpeta raíz del proyecto.
   - Ejecuta `npm install` para instalar todas las dependencias necesarias.

3. **Configuración de Variables de Entorno:**

   - Crea un archivo `.env` en la raíz del proyecto para establecer las variables de entorno necesarias, como el puerto y las credenciales de acceso si es requerido.
   - Te sugerimos duplicar nuestro archivo `.env-example` para tener un ejemplo de las variables necesarias en tu `.env`.

4. **Ejecución:**

   - Inicia la aplicación con: `npm run start`
   - Interactúa con la aplicación en tiempo real con: `npm run dev` (esto activa el modo de desarrollo).

5. **Interacción con la API:**
   - Utiliza herramientas como Postman, cURL o ThunderClient para realizar solicitudes HTTP a la API.
   - Consulta la sección "Endpoints Disponibles" a continuación para obtener detalles sobre las rutas y los tipos de solicitudes que se admiten.

## Endpoints Disponibles

- **GET /personaje:** Obtiene todos los personajes disponibles
- **GET /personaje/:id:** Obtiene un personaje existente por su ID.
- **POST /personaje:** Agrega un nuevo personaje a la base de datos.
- **PATCH /personaje/:id:** Actualiza parcialmente un personaje existente por su ID.
- **DELETE /personaje/:id:** Elimina un personaje por su ID.

¡Explora el mundo de los personajes y forja tu propia leyenda épica!
