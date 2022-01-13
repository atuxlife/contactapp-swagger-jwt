# contactapp-swagger-jwt
Aplicación de contactos usando documentación con Swagger y autenticación JWT

Comandos para ejecutar la Aplicación
- npm run build: Compila el código para producción, creando la carpeta dist/
- npm run dev: Ejecuta el código en modo desarrollo
- npm start: Inicia el proyecto ya compilado

Descripción de las carpetas y archivos del proyecto

- src/ : Contiene todo el código de la aplicación
    - src/controllers/ : Tiene los controladores auth.controller.js y user.controller.js
        - auth.controller.js : Ejecuta el login de la aplicación, recibiendo email y password para generar un token
        - user.controller.js : Tiene el CRUD de la aplicación y los métodos para filtrar usuarios por parámetros y para seguir y dejar de seguir usuarios.
    - src/libs : Aquí va el código de funciones o métodos de apoyo para el resto de la aplicación.
        - cleanParams.js : Limpia los parámetros de entrada POST para hacer el filtro de búsqueda de usuarios
        - initialSetup.js : Ingresa en la base de datos registros de prueba
    - src/middlewares : Contiene los middlewares que intervienen antes de la ejecución de los endpoints para hacer validaciones extra.
        - authVerif.js : Verifica el token ingresado después del inicio de sesión y verifica el perfil de algunos usuarios para permitirles hacer algunas operaciones CRUD.
        - createUserValidator.js : Valida si el usuario ya fue creado comparando su tipo y número de documento, así como el email ingresado, para ver si ya existen en la base de datos.
        - index.js : Incluye los dos archivos anteriormente descritos para que sea fácil si importación en otros módulos de la aplicación.
    - src/models : Aquí se declaran los modelos o colecciones donde se guardaran los datos ingresados en la aplicación.
        - Follow.js : Definición de la colección que indica qué usuario sigue a cuál.
        - User.js : Define la estructura de datos de un usuario.
    - src/routes : Indica las rutas o endpoints de la aplicación.
        - auth.routes.js : Tiene la ruta definida del login de la aplicación.
        - user.routes.js : Define las rutas para las operaciones CRUD de los usuarios, donde todas usan el middleware que verifica la validez del token (todos los usuarios deben estar con la sesión iniciada para hacer uso de los recursos). Para el caso particular de crear, actualizar y borrar usuarios, deben tener los usuarios perfil de admin.
- app.js : Inicaliza e instancia los recursos que serán usados durante toda la aplicación.
- db.js : Aquí está la configuración de la base de datos MongoDB.
- index.js : Arranca la aplicación importando app.js para su funcionamiento.
- .babelrc : Configuración para el uso de Babel
- .gitignore : Indica los archivos que no se subirán al repositorio.
- env_example.txt : Tiene las variables de entorno que se deben configurar. Son datos de prueba, ya que el .env original no se incluye por razones de seguridad.
- package.json : Tiene los datos de la aplicación y sus dependencias.

Para mayor información sobre los endpoints y los datos que reciben y dan como respuesta vaya a la documentación generada por Swagger, usando el link:

http://your-location:your-port/api-docs