import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/error';

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    throw new AppError(401, 'Invalid API key');
  }
  next();
};