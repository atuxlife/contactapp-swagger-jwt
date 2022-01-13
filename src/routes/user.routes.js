import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';
import { authVerify, createUserValidator } from '../middlewares';

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: Id autogenerado del usuario por MongoDB
 *        firstname:
 *          type: string
 *          description: Nombre del contacto
 *        lastname:
 *          type: string
 *          description: Apellido del contacto
 *        idnumber:
 *          type: number
 *          description: Número de documento del contacto
 *        typedoc:
 *          type: enum
 *          description: Tipo de documento de identidad del contacto. Valores = CC-Cédula de ciudadanía, CE-Cédula de extranjería, PS-Pasaporte
 *        address:
 *          type: string
 *          description: Dirección del contacto
 *        phone:
 *          type: string
 *          description: Teléfono del contacto
 *        email:
 *          type: string
 *          description: Email del contacto, sirve como username para el login
 *        password:
 *          type: string
 *          description: Password del contacto, se guarda encriptado
 *        role:
 *          type: enum
 *          description: Role del contacto. Valores = admin-Administrador del sistema, user-Usuario limitado del sistema
 *        createdAt:
 *          type: date
 *          description: Fecha de creación del registro
 *        updatedAt:
 *          type: date
 *          description: Fecha de actualización del registro
 *      required:
 *        - firstname
 *        - lastname
 *        - idnumber
 *        - typedoc
 *        - email
 *        - password
 *        - role
 *      example:
 *        id: 61de6008efacbd8f20c419a0
 *        firstname: Mario
 *        lastname: García
 *        idnumber: 8288518
 *        typedoc: CC
 *        address: Carrera 14 # 69 - 32
 *        phone: 3047684520
 *        email: mario.garcia@gmail.com
 *        password: $2a$10$PfomlQVl9PC2uZGJXTFU4uZC9exzhse948TmcDFqQ41qh1kSiZl4.
 *        role: user
 *        createdAt: 2022-01-12T04:58:48.613Z
 *        updatedAt: 2022-01-12T04:58:48.613Z
 * 
 *    UserCreate:
 *      type: object
 *      properties:
 *        firstname:
 *          type: string
 *          description: Nombre del contacto
 *        lastname:
 *          type: string
 *          description: Apellido del contacto
 *        idnumber:
 *          type: number
 *          description: Número de documento del contacto
 *        typedoc:
 *          type: enum
 *          description: Tipo de documento de identidad del contacto. Valores = CC-Cédula de ciudadanía, CE-Cédula de extranjería, PS-Pasaporte
 *        address:
 *          type: string
 *          description: Dirección del contacto
 *        phone:
 *          type: string
 *          description: Teléfono del contacto
 *        email:
 *          type: string
 *          description: Email del contacto, sirve como username para el login
 *        password:
 *          type: string
 *          description: Password del contacto, se guarda encriptado
 *        role:
 *          type: enum
 *          description: Role del contacto. Valores = admin-Administrador del sistema, user-Usuario limitado del sistema
 *      required:
 *        - firstname
 *        - lastname
 *        - idnumber
 *        - typedoc
 *        - email
 *        - password
 *        - role
 *      example:
 *        id: 61de6008efacbd8f20c419a0
 *        firstname: Mario
 *        lastname: García
 *        idnumber: 8288518
 *        typedoc: CC
 *        address: Carrera 14 # 69 - 32
 *        phone: 3047684520
 *        email: mario.garcia@gmail.com
 *        password: AlgunPassword.
 *        role: user
 * 
 *    UserToUpdate:
 *      type: object
 *      properties: 
 *        firstname:
 *          type: string
 *          description: Nombre del contacto
 *        lastname:
 *          type: string
 *          description: Apellido del contacto
 *        idnumber:
 *          type: number
 *          description: Número de documento del contacto
 *        typedoc:
 *          type: enum
 *          description: Tipo de documento de identidad del contacto. Valores = CC-Cédula de ciudadanía, CE-Cédula de extranjería, PS-Pasaporte
 *        address:
 *          type: string
 *          description: Dirección del contacto
 *        phone:
 *          type: string
 *          description: Teléfono del contacto
 *        email:
 *          type: string
 *          description: Email del contacto, sirve como username para el login
 *        role:
 *          type: enum
 *          description: Role del contacto. Valores = admin-Administrador del sistema, user-Usuario limitado del sistema
 *      required:
 *        - firstname
 *        - lastname
 *        - idnumber
 *        - typedoc
 *        - email
 *        - role
 *      example:
 *        id: 61de6008efacbd8f20c419a0
 *        firstname: Mario
 *        lastname: García
 *        idnumber: 8288518
 *        typedoc: CC
 *        address: Carrera 14 # 69 - 32
 *        phone: 3047684520
 *        email: mario.garcia@gmail.com
 *        role: user
 * 
 *    UserFilter:
 *      type: object
 *      properties: 
 *        firstname:
 *          type: string
 *          description: Nombre del contacto
 *        lastname:
 *          type: string
 *          description: Apellido del contacto
 *        idnumber:
 *          type: number
 *          description: Número de documento del contacto
 *      required:
 *        - firstname
 *        - lastname
 *        - idnumber
 *      example:
 *        firstname: Mario
 *        lastname: García
 *        idnumber: 8288518
 * 
 *    UserNotFound:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje para el usuario no encontrado
 *      example:
 *        message: User not found
 * 
 *    UserDeleted:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje cuando el usuario se borra exitosamente
 *      example:
 *        message: User deleted successfully
 * 
 *    UserFollowed:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje cuando el usuario se ha podido seguir exitosamente
 *      example:
 *        message: User was successfully followed
 * 
 *    UserYetFollowed:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje cuando el usuario no se ha podido seguir porque ya lo sigue
 *      example:
 *        message: You're already following this user
 * 
 *    UserNotFollowed:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje cuando el usuario se ha dejado de seguir exitosamente
 *      example:
 *        message: You've unfollowed this user
 * 
 *    UserNoFollowing:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje cuando el usuario trata de dejar de seguir a otro que no sigue
 *      example:
 *        message: You're not following this user
 * 
 *  parameters:
 *    userId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Id del usuario
 */

/**
 * @swagger
 * /api/users/create:
 *  post:
 *    summary: Crear un usuario con los datos básicos
 *    tags: [Crear usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserCreate'
 *    responses:
 *      200:
 *        description: El usuario fue exitosamente creado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Some server error
 *
 */
router.post('/create', [
    authVerify.verifyToken,
    authVerify.isAdmin,
    createUserValidator.checkDuplicateIdNumerOrEmail
], userCtrl.createUser);

/**
 * @swagger
 * /api/users/listusers:
 *  get:
 *    summary: Retorna una lista con paginación de 10 en 10 de los usuarios registrados
 *    tags: [Listar usuarios]
 *    parameters:
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: Límite o cantidad de resultados por página
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: Página de resultados a mostrar
 *    responses:
 *      200:
 *        description: Lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get('/listusers', [
    authVerify.verifyToken
], userCtrl.getUsers);

/**
 * @swagger
 * /api/users/filterusers:
 *  post:
 *    summary: Buscar usuarios usando un filtro por Nombre, Apellido y Número de documento
 *    tags: [Buscar usuario con filtros]
 *    parameters:
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: Límite o cantidad de resultados por página
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: Página de resultados a mostrar
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/UserFilter'
 *    responses:
 *      200:
 *        description: Listado de usuarios encontrados por el filtro
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/User'
 *      404:
 *        description: Usuarios no encontrados por el filtro
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *
 */
router.post('/filterusers', [
    authVerify.verifyToken
], userCtrl.getFilteredUsers);

/**
 * @swagger
 * /api/users/showuser/{id}:
 *  get:
 *    summary: Obtener un usuario por el ID. Recibe como parámetro el id del usuario a mostrar.
 *    tags: [Mostrar único usuario por ID]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario encontrado
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/User'
 *      404:
 *        description: El usuario no fue encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.get('/showuser/:id', [
    authVerify.verifyToken
], userCtrl.getUserById);

/**
 * @swagger
 * /api/users/updateuser/{id}:
 *  put:
 *    summary: Actualizar un usuario por el ID
 *    tags: [Actualizar datos del usuario]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/UserToUpdate'
 *    responses:
 *      200:
 *        description: El usuario actualizado
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/User'
 *      404:
 *        description: El usuario a tratar de modificar no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *
 */
router.put('/updateuser/:id', [
    authVerify.verifyToken,
    authVerify.isAdmin
], userCtrl.updateUserById);

/**
 * @swagger
 * /api/users/deluser/{id}:
 *  delete:
 *    summary: Borrar el usuario por el ID
 *    tags: [Eliminar usuario]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario ha sido borrado
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/UserDeleted'
 *      404:
 *        description: Usuario no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *
 */
router.delete('/deluser/:id', [
    authVerify.verifyToken,
    authVerify.isAdmin
], userCtrl.deleteUserById);

/**
 * @swagger
 * /api/users/followuser/{id}:
 *  get:
 *    summary: Seguir a un usuario registrado. Recibe como parámetro el id del usuario a seguir.
 *    tags: [Seguir usuario]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario ha sido seguido exitosamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/UserFollowed'
 *      404:
 *        description: Usuario al que intenta seguir no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *      406:
 *        description: Ya está siguiendo al usuario que intenta seguir
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserYetFollowed'
 *
 */
router.get('/followuser/:id', [
    authVerify.verifyToken
], userCtrl.followUser);

/**
 * @swagger
 * /api/users/unfollowuser/{id}:
 *  get:
 *    summary: Dejar de seguir a un usuario registrado. Recibe como parámetro el id del usuario a dejar de seguir.
 *    tags: [Dejar de seguir usuario]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: El usuario ha sido dejado de seguir exitosamente a otro
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/UserNotFollowed'
 *      404:
 *        description: Usuario al que intenta dejar de seguir no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *      406:
 *        description: Usted no está siguiendo al usuario que intenta dejar de seguir
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNoFollowing'
 *
 */
router.get('/unfollowuser/:id', [
    authVerify.verifyToken
], userCtrl.unFollowUser);

export default router;