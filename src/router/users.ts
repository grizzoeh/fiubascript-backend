import express from 'express';

import { getAllUsers, deleteUser, updateUser, getUserCharacters, changeCurrentCharacter, sumCoins, reduceCoins } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users', getAllUsers);
  router.delete('/users/:id', deleteUser);
  router.patch('/users/:id', updateUser);
  router.get('/users/:id/characters', getUserCharacters);
  router.patch("/users/characters", changeCurrentCharacter);
  router.patch("/users/sum-money", sumCoins);
  router.patch("/users/reduce-money", reduceCoins);
};