// src/controllers/pet.controller.ts
import type { Request, Response } from 'express';
import { PetService } from '../services/pet.service';
import { successResponse, errorResponse } from '../utils/apiResponse';
import { NotFoundError } from '../utils/error';

const petService = new PetService();

export default {
  async createPet(req: Request, res: Response) {
    try {
      const pet = await petService.createPet(req.body);
      successResponse(res, pet, 201);
    } catch (error) {
      errorResponse(res, error as Error);
    }
  },

  async getPet(req: Request, res: Response) {
    try {
      const pet = await petService.getPetById(parseInt(req.params.id ?? '0'));
      if (!pet) throw new NotFoundError('Pet');
      successResponse(res, pet);
    } catch (error) {
      errorResponse(res, error as Error);
    }
  }

  // Add other controller methods
};