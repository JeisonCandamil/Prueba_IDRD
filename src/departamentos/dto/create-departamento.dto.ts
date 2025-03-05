import {
    IsInt,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateDepartamentoDto {
    @IsString()
    @IsNotEmpty()
    nombre : string;
}
