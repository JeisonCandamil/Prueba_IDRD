import {
    IsInt,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateMaterialesDto {
    @IsString()
    @IsNotEmpty()
    codigo! : string;
    descripcion! : string;
    unidad! : string;
    precio!: number;
}
 