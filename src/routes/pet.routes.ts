import { Router } from 'express';
import petController from '../controllers/pet.controller';
import { apiKeyAuth } from '../middleware/auth';
import { upload } from '../middleware/upload';
// import { validateBody } from '../middleware/validation';
import { CreatePetDto } from '../models/pet.model';

const router = Router();

router.post('/',
  apiKeyAuth,
  upload.array('images'),
//   validateBody(CreatePetDto),
  petController.createPet
);

router.get('/:id', apiKeyAuth, petController.getPet);
// Add other routes

export default router;