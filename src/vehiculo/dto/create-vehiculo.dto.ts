import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { number } from 'joi';

enum Combustible {
  NAFTA = "nafta",
  DIESEL = "diesel"
}

export class CreateVehiculoDto {
  @IsNotEmpty()
  @IsString()
  matricula: string;

  @IsOptional()
  @IsString()
  padron: string;

  @IsOptional()
  @IsInt()
  codigoNacional: number;

  @IsOptional()
  @IsInt()
  divNum: number;

  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsNotEmpty()
  @IsInt()
  kilometros: number;

  @IsNotEmpty()
  @IsString()
  modelo: string;

  @IsNotEmpty()
  @IsInt()
  anio: number;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsEnum(Combustible)
  combustible?: Combustible;

  @IsOptional()
  @IsString()
  numeroMotor?: string;

  @IsOptional()
  @IsString()
  numeroChasis?: string;

  @IsOptional()
  @IsString()
  ciRut?: string;

  @IsOptional()
  @IsDateString()
  empadronado?: Date;

  @IsOptional()
  @IsDateString()
  emitido?: Date;
}