import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ClienteService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('CLIENTE SERVICE');
  onModuleInit() {
    this.$connect();
    this.logger.log('Base de Datos Conectada');
  }
  create(createClienteDto: CreateClienteDto) {
    return this.cliente.create({data:createClienteDto});
  }

  async findAll() {
    return await this.cliente.findMany({})
  }

 async findOne(id: number) {
  const cliente = await this.cliente.findFirst({where:{id:id}});
  if(!cliente) {
    throw new BadRequestException(`El cliente con el id: #${id} no pudo ser encontrado`);
  }  

return cliente

  }

 async update(id: number, updateClienteDto: UpdateClienteDto) {

  await this.findOne(id);
  return this.cliente.update({
    where:{id},
    data:updateClienteDto
  })

  }

  async remove(id: number) {
    await this.findOne(id);

    const cliente = await this.cliente.delete({
      where:{id}
    })
return cliente;
  }
}
