import { Module } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materiales } from './entities/materiale.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Materiales]),
  ],
  controllers: [MaterialesController],
  providers: [MaterialesService],
})
export class MaterialesModule {}
