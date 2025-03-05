import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialesDto } from './create-materiale.dto';

export class UpdateMaterialeDto extends PartialType(CreateMaterialesDto) {}
