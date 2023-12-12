import express from 'express';

import { deleteUserById, getUsers, getUserById } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }
};

export const getUserByIdEndpoint = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  try {
    const { id } = req.params as { id: string };

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }
}

export const deleteUser = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  try {
    const { id } = req.params as { id: string };

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }
}

export const updateUser = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  try {
    const { id } = req.params as { id: string };
    const updates = req.body;

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    Object.assign(user, updates);

    await user.save();

    return res.status(200).json({ user: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserCharacters = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  try {
    const { id } = req.params as { id: string };

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }


    return res.status(200).json({ characters: user.characters, currentCharacter: user.currentCharacter });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }

}


export const changeCurrentCharacter = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  try {
    const { userId, characterId } = req.body as { userId: string, characterId: number };

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }


    user.currentCharacter = characterId;

    await user.save();

    return res.status(200).json({ currentCharacter: user.currentCharacter });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }

}

export const sumCoins = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  const { userId, coins } = req.body as { userId: string, coins: number };

  try {

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }


    user.coins += coins;

    await user.save();

    return res.status(200).json({ coins: user.coins });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }

}

export const reduceCoins = async (req: express.Request, res: express.Response) : Promise<express.Response> => {
  const { userId, coins } = req.body as { userId: string, coins: number };

  try {

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }


    user.coins -= coins;

    await user.save();

    return res.status(200).json({ coins: user.coins });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: 'Internal server error' });
  }

}
