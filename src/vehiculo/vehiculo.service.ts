import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VehiculoService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('VEHICULOS SERVICE');

  onModuleInit() {
    this.$connect();
    this.logger.log('Base de Datos Conectada');
  }


  create(createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculo.create({
      data:createVehiculoDto
    })
  }

  findAll() {
    return this.vehiculo.findMany({})
  }

  async findOne(id: number) {

    const vehiculo = await this.vehiculo.findFirst({where:{id}})

    if(!vehiculo){
      throw new BadRequestException(`El Vehiculo con id: #${id} no ha sido encontrado`)
    }

    return vehiculo

  }

 async update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
   
await this.findOne(id);

const vehiculo= await this.vehiculo.update({
  where:{id},
  data:updateVehiculoDto
})
return vehiculo

  }

  async remove(id: number) {
   
    await this.findOne(id);

    const vehiculo = await this.vehiculo.delete({
      where:{id}
    })
return vehiculo
  }
}
