import express from 'express';

import { getAllUsers, deleteUser, updateUser, getUserCharacters, changeCurrentCharacter, sumCoins, reduceCoins } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users', getAllUsers);
  router.delete('/users/:id', deleteUser);
  router.patch('/users/:id', updateUser);
  router.get('/users/:id/characters', getUserCharacters);
  router.post("/users/characters", changeCurrentCharacter);
  router.post("/users/sum-coins", sumCoins);
  router.post("/users/reduce-coins", reduceCoins);
};