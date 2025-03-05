import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';

@Entity('materiales')
export class Materiales {
    @PrimaryGeneratedColumn()
  id!: number;
  
    @Column()
    codigo!: string;

    @Column()
    descripcion!: string;

    @Column()
    unidad!: string;

    @Column()
    precio!: number;
}
