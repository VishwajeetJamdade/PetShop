// src/app.ts
import express from 'express';
import cors from 'cors';
import petRoutes from './routes/pet.routes';
import { apiKeyAuth } from './middleware/auth';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/pets', apiKeyAuth, petRoutes);

// Error handling
function errorHandler(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

app.use(errorHandler);

export default app;