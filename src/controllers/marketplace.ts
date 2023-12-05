// Import necessary modules and models
import { getUserById } from '../db/users';
import express, { Request, Response } from 'express';



export const buyCharacter = async (req: Request, res: Response) => {

    const { userId, characterId, cost } = req.body;

    try {
        // Fetch user from the database
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
      

        // Check if the user has enough coins
        if (user.coins < cost) {
        return res.status(400).json({ error: 'Not enough coins to buy this character' });
        }

        // Deduct coins and add character ID to the list
        user.coins -= cost;
        user.characters.push(characterId);
        user.currentCharacter = characterId;

        // Save the updated user in the database
        await user.save();

        // Return the updated user object
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
