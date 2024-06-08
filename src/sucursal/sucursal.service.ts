import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SucursalService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('SUCURSAL SERVICE');

  onModuleInit() {
    this.$connect();
    this.logger.log('Base de Datos Conectada');
  }

  create(createSucursalDto: CreateSucursalDto) {
    return this.sucursal.create({
      data: createSucursalDto,
    });
  }

  async findOne(id: number) {
    return await this.sucursal.findUnique({
      where: { id },
    })
  }

  findAll() {
    return this.sucursal.findMany({});
  }

  async remove(id: number) {
    const exsiteSuc = await this.sucursal.findFirst({ where: { id } });
    if (!exsiteSuc) {
      throw new BadRequestException(
        `La sucursal con el Id: #${id} no ha sido Encontrada`,
      );
    }

    const sucursal = await this.sucursal.delete({ where: { id } });
    return sucursal;
  }
}
