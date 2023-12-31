// Import necessary modules and models
import { getUserById } from '../db/users';
import express from 'express';



export const buyCharacter = async (req: express.Request, res: express.Response): Promise<express.Response> => {

    const { userId, characterId, cost } = req.body as { userId: string, characterId: number, cost: number };

    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
      
        if (user.coins < cost) {
        return res.status(400).json({ error: 'Not enough coins to buy this character' });
        }

        user.coins -= cost;
        user.characters.push(characterId);
        user.currentCharacter = characterId;

        await user.save();

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
