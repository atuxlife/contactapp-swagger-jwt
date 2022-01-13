import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';

/**
 * @swagger
 * components:
 *  schemas:
 *    UserLogin:
 *      type: object
 *      properties: 
 *        email:
 *          type: string
 *          description: Nombre del contacto
 *        password:
 *          type: string
 *          description: Apellido del contacto
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: some@email.com
 *        password: Pass123!
 * 
 *    UserLogged:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Token de respuesta al inicio de sesión
 *      example:
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 * 
 *    UserBadPassword:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje para el usuario con password incorrecto
 *      example:
 *        message: Invalid password
 * 
 *    UserNotFound:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Un mensaje para el usuario no encontrado
 *      example:
 *        message: User not found * 
 * 
 */

/**
 * @swagger
 * /api/auth/login:
 *  get:
 *    summary: Inicia sesión en la aplicación y devuelve un token de validación
 *    tags: [Login de usuario] 
 *    responses:
 *      200:
 *        description: El usuario ha iniciado sesión exitosamente
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/UserLogged'
 *      403:
 *        description: Contraseña de inicio de sesión incorrecta
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserBadPassword'
 *      404:
 *        description: Usuario con el que intenta iniciar sesión no existe
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 *
 */
router.post('/login', authCtrl.login);

export default router;