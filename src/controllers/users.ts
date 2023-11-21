import express from 'express';

import { deleteUserById, getUsers, getUserById } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);
    
    user.email = email;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getUserCharacters = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    return res.status(200).json({ characters: user.characters });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }

}

export const getUserCurrentCharacter = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    return res.status(200).json({ currentCharacter: user.currentCharacter });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }

}

export const changeCurrentCharacter = async (req: express.Request, res: express.Response) => {
  try {
    const { userId, characterId } = req.body;

    const user = await getUserById(userId);

    user.currentCharacter = characterId;

    await user.save();

    return res.status(200).json({ currentCharacter: user.currentCharacter });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }

}