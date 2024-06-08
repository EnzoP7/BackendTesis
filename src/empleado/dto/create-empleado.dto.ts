import {
  IsInt,
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsStrongPassword,
  IsString,
} from 'class-validator';
enum RolEmpleado {
  ENCARGADO = 'encargado',
  EMPLEADO = 'empleado',
  ADMIN = 'admin'
}
export class CreateEmpleadoDto {
  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @IsNotEmpty()
  cedula: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsInt()
  @IsNotEmpty()
  sucursalId: number;



  @IsEnum(RolEmpleado)
  @IsNotEmpty()
  rol: RolEmpleado;
}
