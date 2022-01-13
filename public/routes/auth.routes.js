"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();

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
var _default = router;
exports["default"] = _default;