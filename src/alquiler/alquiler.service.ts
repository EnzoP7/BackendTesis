import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateAlquilerDto } from './dto/create-alquiler.dto';
import { UpdateAlquilerDto } from './dto/update-alquiler.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AlquilerService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ALQUILER SERVICE');

  onModuleInit() {
    this.$connect();
    this.logger.log('Base de Datos Conectada');
  }

  create(createAlquilerDto: CreateAlquilerDto) {


 return this.alquiler.create({
 data: createAlquilerDto,
 })
  }

  findAll() {
    return this.alquiler.findMany({})
  }

  async findOne(id: number) {

    const alquiler = await this.alquiler.findUnique({ where: { id } });
    if (!alquiler) {
      throw  new Error(`El alquiler con ID "${id}" no existe`);
    }

    return alquiler
  }

  async update(id: number, updateAlquilerDto: UpdateAlquilerDto) {
    await this.findOne(id); // Verificar si el reg
    const alquiler = await this.alquiler.update({
      where: { id },
      data:updateAlquilerDto
    })

    return alquiler
  }

  async remove(id: number) {
    await this.findOne(id);

    const alquiler = await this.alquiler.delete({ where: { id }});
    return alquiler
  }
}
