import { IsString, IsInt, IsOptional, IsEnum } from 'class-validator';

export enum PetType {
  DOG = 'DOG',
  CAT = 'CAT',
  BIRD = 'BIRD',
  FISH = 'FISH',
  OTHER = 'OTHER'
}

export class CreatePetDto {
  @IsOptional()
    @IsString()
    name!: string;

  @IsEnum(PetType)
  type!: PetType;

  @IsInt()
  age!: number;

  @IsOptional()
  @IsString()
  breed?: string;
}

export class UpdatePetDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(PetType)
  type?: PetType;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsString()
  breed?: string;
}