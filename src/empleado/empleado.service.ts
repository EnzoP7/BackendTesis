import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaClient } from '@prisma/client';
import { LoginEmpleadoDto } from './dto/login-empleado.dto';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { envs } from 'src/config';


@Injectable()
export class EmpleadoService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('EMPLEADO SERVICE');

  constructor(private readonly jwtService: JwtService) {
    super();
  }

  onModuleInit() {
    this.$connect();
    this.logger.log('Base de Datos Conectada');
  }

  async signJWT(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    try {
      
      const { sub, iat, exp, ...user } = this.jwtService.verify(token, {
        secret: envs.jwtSecret,
      });

      return {
        user: user,
        token: await this.signJWT(user),
      }

    } catch (error) {
      console.log(error);
    throw new BadRequestException("Algo salio mal al verificar el token")
    }

  }



  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const { mail, password, ...rest } = createEmpleadoDto;
   

    try {
      const empleado = await this.empleado.findUnique({
        where: {
          mail: mail,
        },
      });

      if (empleado) {
        throw new BadRequestException(`El Correo: ${mail} Ya existe...`);
      }

      const newEmpleado = await this.empleado.create({
        data: {
          mail: mail,
          password: bcrypt.hashSync(password, 10),
          ...rest,
        },
      });

      return {
        empleado: newEmpleado,
        token: await this.signJWT(newEmpleado),
      };
    } catch (error) {
      console.log("El ERROR: ",error);
      
      throw new BadRequestException(`Algo salio mal en el registro`);
    }
  }

  async loginEmpleado(loginEmpleadoDto: LoginEmpleadoDto) {
    const { mail, password } = loginEmpleadoDto;

    try {
      const empleado = await this.empleado.findUnique({
        where: {
          mail: mail,
        },
      });

      if (!empleado) {
        throw new BadRequestException(`El Correo: ${mail} No Existe...`);
      }

      const isPasswordValid = bcrypt.compareSync(password, empleado.password);

      if (!isPasswordValid) {
        throw new BadRequestException('No coinciden las contraseñas');
      }

      return {
        empleado: empleado,
        token: await this.signJWT(empleado),
      };
    } catch (error) {
      throw new BadRequestException(`Algo salio mal en el registro`);
    }
  }

  async findAll() {
    return this.empleado.findMany({});
  }

  async findOne(id: number) {
    const empleado = await this.empleado.findUnique({ where: { id } });
    if (!empleado) {
      throw new BadRequestException(
        `El Empleado con el Id: #${id} no ha sido encontrado.`,
      );
    }

    return empleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    await this.findOne(id); //Verificamos que exista el  registro a actualizar
    const empleado = await this.empleado.update({
      where: { id },
      data: updateEmpleadoDto,
    });

    return empleado;
  }

  async remove(id: number) {
    await this.findOne(id);
    const empleado = await this.empleado.delete({
      where: { id },
    });
    return empleado;
  }
}
