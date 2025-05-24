import { Request, Response } from 'express';

export const getExample = async (req: Request, res: Response) => {
  try {
    // Your logic here
    res.json({ message: 'Example controller' });
  } catch (error) {
    res.status(500).json({ message: 'Error in example controller' });
  }
};