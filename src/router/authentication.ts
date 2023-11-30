import express from 'express';

import { login, register } from '../controllers/authentication';

export default (router: express.Router) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
  /**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Enpoint para registrar un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Registro de usuario exitoso
 *         
 *       '400':
 *         description: Solicitud incorrecta
 *       '500':
 *         description: Error interno del servidor
 */

   /**
   * @openapi
   * /auth/login:
   *   post:
   *     summary: Inicio de sesión de usuario
   *     description: Enpoint para el inicio de sesión de usuario.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Inicio de sesión de usuario exitoso
   *         content:
   *           application/json:
   *             schema:
   *       '400':
   *         description: Solicitud incorrecta
   *       '403':
   *         description: Prohibido
   *       '500':
   *         description: Error interno del servidor
   */
  
};