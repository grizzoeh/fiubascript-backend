import express from 'express';

import { buyCharacter } from '../controllers/marketplace';

export default (router: express.Router) => {
  router.post('/marketplace/buy', buyCharacter);
};