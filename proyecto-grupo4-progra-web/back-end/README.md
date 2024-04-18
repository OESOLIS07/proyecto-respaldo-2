# - Bienvenido a nuestro Servidor Node.js -

¡Hola! Este es el README para nuestro servidor Node.js, diseñado para gestionar un sistema de registro e inicio de sesión de usuarios, con autenticación mediante tokens JWT y almacenamiento en una base de datos MySQL utilizando Sequelize.

## Instalación

### Clona el Repositorio
Clona este repositorio en tu máquina local utilizando tu cliente de Git favorito.

### Instala Dependencias
Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando:

    npm install

#### - Configuración
Configuración de la Base de Datos
Asegúrate de tener un servidor MySQL en ejecución y actualiza las credenciales de conexión en el archivo server.js según corresponda.

#### - Clave Secreta JWT
Define una clave secreta segura para la generación de tokens JWT y actualízala en la variable secretKey en el archivo server.js.

# Uso

Iniciar el Servidor
Ejecuta el siguiente comando en la terminal para iniciar el servidor:

#### - Copy code

    node server.js

## Explora las Rutas

- Accede a http://localhost:3008/api en tu navegador para verificar que el servidor esté activo.

- Utiliza las siguientes rutas para interactuar con el servidor:

- POST /register: Registra un nuevo usuario en la base de datos.
- POST /login: Inicia sesión con un usuario registrado y recibe un token JWT válido.
- GET /users: Obtiene la lista de usuarios registrados (requiere un token válido en el encabezado Authorization).

# Consideraciones de Seguridad
### Contraseñas Seguras
Las contraseñas de los usuarios se almacenan en la base de datos de forma segura utilizando el algoritmo de hash bcrypt.

### Autenticación JWT
Se utiliza JSON Web Tokens (JWT) para la autenticación de usuarios, proporcionando un sistema seguro y escalable para manejar sesiones de usuario.

### Verificación de Tokens
Se implementa un middleware para verificar la validez de los tokens JWT antes de permitir el acceso a rutas protegidas.

### Contribución

 ¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

