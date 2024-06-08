import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  nombre: string;

 
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  apellido1: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  apellido2?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  domicilio: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  pais: string;

  @IsNotEmpty()
  @IsInt()
  licencia: number;

  @IsNotEmpty()
  licenciaEmitida: Date;

  @IsNotEmpty()
  licenciaVencimiento: Date;

  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  telefono?: number;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  rut?: string;

  @IsOptional()
  @IsBoolean()
  clienteValido?: boolean;
}
