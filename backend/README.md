# Proyecto Final Backend con Node.js

## Descripción

Este es el proyecto final del curso Backend II de Coderhouse, desarrollado con **Node.js** que ofrece una API para gestionar usuarios, carritos, productos, tickets comprobantes y manejo de envío de emails.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Express**: Framework web para gestionar las rutas y peticiones HTTP.
- **MongoDB** y **Mongoose**: Base de datos.
- **JWT**: Para autenticación basada en tokens.
- **Multer**: Para la carga de archivos.
- **bcrypt**: Para el cifrado de contraseñas.
- **dotenv**: Manejo de variables de entorno.
- **nodemailer**: Manejo de mensajería por SMTP.
- **cookie-parser**: Control de cookies.
- **cors**: Integración con el front.
- **passport** y **passport-jwt**: Manejo de sesiones.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- npm (generalmente viene con Node.js)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Emagomezj/backend_II_final
    cd backend
    ```

2. Instala las dependencias:

    ```bash
    npm i
    ```

3. Configura las variables de entorno. Modifica el archivo `.env.example` en la raíz del proyecto con las siguientes variables:

    ```bash
    PORT=<Puerto a utilizar>
    DB_CONNECTION=<URL de tu base de datos>
    JWT_SECRET=<clave secreta>
    SMTP_HOST=<servidor SMTP a utilizar - smtp.gmail.com>
    SMTP_PORT=<puerto que utilizará el servidor SMTP>
    SMTP_EMAIL=<Email desde el que se enviarán los mensajes>
    SMTP_PASSWORD=<password para permitir el envío - app password para Google>
    ```

4. Inicia el servidor:

    ```bash
    npm run dev
    npm start
    ```

## Uso

### Rutas Disponibles

En el siguiente enlace se encuentra un archivo zip con entorno y collections configuradas específicamente para testear este proyecto.

Otra forma de testearlo es mediante el front.

```bash
cd ../
cd front
