// src/services/pet.service.ts
import prisma from '../config/database';
import redis from '../config/redis';

export class PetService {
  async createPet(petData: any): Promise<{ images: any[] }> {
    return prisma.pet.create({
      data: {
        ...petData,
        images: petData.images ? {
          create: petData.images
        } : undefined
      },
      include: { images: true }
    });
  }

  async getPetById(id: number): Promise<({ images: any[] }) | null> {
    const cacheKey = `pet:${id}`;
    const cachedPet = await redis.get(cacheKey);
    if (cachedPet) return JSON.parse(cachedPet);

    const pet = await prisma.pet.findUnique({
      where: { id },
      include: { images: true }
    });

    if (pet) await redis.setEx(cacheKey, 3600, JSON.stringify(pet));
    return pet;
  }

  // Implement other CRUD operations
}