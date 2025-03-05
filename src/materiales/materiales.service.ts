import { HttpException, Injectable } from '@nestjs/common';
import { CreateMaterialesDto } from './dto/create-materiale.dto';
import { UpdateMaterialeDto } from './dto/update-materiale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materiales } from './entities/materiale.entity';

@Injectable()
export class MaterialesService {
  constructor(
    @InjectRepository(Materiales)
    private readonly materialeRepository: Repository<Materiales>,
  ) {}

  async create(
    CreateMaterialeDto: CreateMaterialesDto,
  ): Promise<Materiales> {
    const MaterialeData =
      this.materialeRepository.create(
        CreateMaterialeDto
      );
    return this.materialeRepository.save(MaterialeData);
  }

  async findAll(): Promise<Materiales[]> {
    return await this.materialeRepository.find();
  }

  async findOne(id: number): Promise<Materiales> {
    const materialeData =
      await this.materialeRepository.findOneBy({ id });
    if (!materialeData) {
      throw new HttpException(
        'User Not Found',
        404,
      );
    }
    return materialeData;
  }

  async update(
    id: number,
    UpdateMaterialeDto: UpdateMaterialeDto,
  ): Promise<Materiales> {
    const existingUser = await this.findOne(id);
    const userData = this.materialeRepository.merge(
      existingUser,
      UpdateMaterialeDto,
    );
    return await this.materialeRepository.save(
      userData,
    );
  }

  async remove(id: number): Promise<Materiales> {
    const MaterialeExistente = await this.findOne(id);
    return await this.materialeRepository.remove(
      MaterialeExistente,
    );
  }
}
