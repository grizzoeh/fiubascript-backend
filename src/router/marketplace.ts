import express from 'express';

import { buyCharacter } from '../controllers/marketplace';

export default (router: express.Router) => {
   /**
   * @openapi
   * /marketplace/buy:
   *   post:
   *     summary: Comprar un personaje
   *     description: Enpoint para comprar un personaje en el mercado.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               characterId:
   *                 type: string
   *               cost:
   *                 type: number
   *               userId:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Compra exitosa
   *       '400':
   *         description: Solicitud incorrecta
   *       '500':
   *         description: Error interno del servidor
   */
  router.post('/marketplace/buy', buyCharacter);
};