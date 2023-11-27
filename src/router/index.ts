import express from 'express';

import authentication from './authentication';
import users from './users';
import marketplace from './marketplace';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  marketplace(router);

  return router;
};