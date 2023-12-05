import express from 'express';

import { getAllUsers, deleteUser, updateUser, getUserCharacters, changeCurrentCharacter, sumCoins, reduceCoins, getUserByIdEndpoint } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users', getAllUsers);
  router.get('/users/:id', getUserByIdEndpoint);
  router.delete('/users/:id', deleteUser);
  router.patch('/users/:id', updateUser);
  router.get('/users/:id/characters', getUserCharacters);
  router.post("/users/characters", changeCurrentCharacter);
  router.post("/users/sum-coins", sumCoins);
  router.post("/users/reduce-coins", reduceCoins);

    /**
     * @openapi
     * /users:
     *   get:
     *     summary: Obtener todos los usuarios
     *     description: Enpoint para obtener todos los usuarios.
     *     responses:
     *       '200':
     *         description: Éxito al obtener los usuarios
     *       '500':
     *         description: Error interno del servidor
     */
  
    /**
     * @openapi
     * /users/{id}:
     * 
     *   get:
     *     summary: Obtener un usuario
     *     description: Enpoint para obtener un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID del usuario a obtener
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Usuario obtenido exitosamente
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     * 
     *   delete:
     *     summary: Eliminar un usuario
     *     description: Enpoint para eliminar un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID del usuario a eliminar
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Usuario eliminado exitosamente
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor

     *   patch:
     *     summary: Actualizar un usuario
     *     description: Enpoint para actualizar un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID del usuario a actualizar
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Usuario actualizado exitosamente
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     * 
     */
  
    /**
     * @openapi
     * /users/{id}:
     *   patch:
     *     summary: Actualizar un usuario
     *     description: Enpoint para actualizar un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID del usuario a actualizar
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Usuario actualizado exitosamente
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     */
  
    /**
     * @openapi
     * /users/{id}/characters:
     *   get:
     *     summary: Obtener personajes de un usuario
     *     description: Enpoint para obtener los personajes de un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID del usuario
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Éxito al obtener los personajes del usuario
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     */
  
    /**
     * @openapi
     * /users/characters:
     *   post:
     *     summary: Cambiar personaje actual
     *     description: Enpoint para cambiar el personaje actual de un usuario.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               userId:
     *                 type: string
     *               characterId:
     *                 type: string
     *     responses:
     *       '200':
     *         description: Cambio de personaje exitoso
     *       '400':
     *         description: Solicitud incorrecta
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     */
  
    /**
     * @openapi
     * /users/sum-coins:
     *   post:
     *     summary: Sumar monedas a un usuario
     *     description: Enpoint para sumar monedas a un usuario.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               userId:
     *                 type: string
     *               coins:
     *                 type: number
     *     responses:
     *       '200':
     *         description: Monedas sumadas exitosamente
     *       '400':
     *         description: Solicitud incorrecta
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     */
  
    /**
     * @openapi
     * /users/reduce-coins:
     *   post:
     *     summary: Restar monedas a un usuario
     *     description: Enpoint para restar monedas a un usuario.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               userId:
     *                 type: string
     *               coins:
     *                 type: number
     *     responses:
     *       '200':
     *         description: Monedas restadas exitosamente
     *       '400':
     *         description: Solicitud incorrecta
     *       '404':
     *         description: Usuario no encontrado
     *       '500':
     *         description: Error interno del servidor
     */
  
};