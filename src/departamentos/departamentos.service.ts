import { Injectable, HttpException } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';


@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(
    CreateDepartamentoDto: CreateDepartamentoDto,
  ): Promise<Departamento> {
    const departamentoData =
      this.departamentoRepository.create(
        CreateDepartamentoDto
      );
    return this.departamentoRepository.save(departamentoData);
  }

  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find();
  }

  async findOne(id: number): Promise<Departamento> {
    const departamentoData =
      await this.departamentoRepository.findOneBy({ id });
    if (!departamentoData) {
      throw new HttpException(
        'User Not Found',
        404,
      );
    }
    return departamentoData;
  }

  async update(
    id: number,
    UpdateDepartamentoDto: UpdateDepartamentoDto,
  ): Promise<Departamento> {
    const existingUser = await this.findOne(id);
    const userData = this.departamentoRepository.merge(
      existingUser,
      UpdateDepartamentoDto,
    );
    return await this.departamentoRepository.save(
      userData,
    );
  }

  async remove(id: number): Promise<Departamento> {
    const departamentoExistente = await this.findOne(id);
    return await this.departamentoRepository.remove(
      departamentoExistente,
    );
  }
}
