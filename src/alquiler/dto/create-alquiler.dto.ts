import { Type } from 'class-transformer';
import {
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

enum garantiaMedio {
  VALE = "Vale",
  EFECTIVO ="Efectivo",
  TARJETA = "Tarjeta"
}

enum modoDePago{
    EFECTIVO = "Efectivo",
    TARJETA = "Tarjeta"
}

enum combustible {
    LL = "lleno",
    LC ="7/8",
    TC = "3/4",
    CO="5/8",
    MD="1/2",
    TO="3/8",
    UC="1/4",
    UO="1/8",
    VV="Vacio"
}

export class CreateAlquilerDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  vehiculoId: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  ArrendatarioId: number;

  @IsOptional()
  @IsInt()
  ConductorAutorizado_fiadorId: number;

  @IsOptional()
  @IsInt()
  ConductorAutorizado_YO_fiador_id: number;

  @IsInt()
  garantiaImporte: number;

  @IsString()
  @IsEnum(garantiaMedio)
  garantiaMedio: garantiaMedio;

  @IsBoolean()
  kilometrosLibre: boolean;

  @IsInt()
  precioAlquiler: number;

  @IsString()
  @IsEnum(combustible)
  combustibleSalida: combustible;

  @IsOptional()
  @IsString()
  @IsEnum(combustible)
  combustibleRegreso: combustible;

  @IsString()
  lugarDeSalida: string;

  @IsDateString()
  fechaDeSalida: Date;

  @IsDateString()
  horaDeSalida: Date;

  @IsOptional()
  @IsString()
  lugarDeRegreso: string;

  @IsOptional()
  @IsDateString()
  fechaDeRegreso: Date;

  @IsOptional()
  @IsDateString()
  horaDeRegreso: Date;

  @IsOptional()
  @IsDateString()
  extendidoAl: Date;

  @IsOptional()
  @IsInt()
  autorizadoExtendidoPorEmpleado_Id: number;

  @IsOptional()
  @IsInt()
  kmEntrada: number;

  @IsInt()
  kmSalida: number;

  @IsOptional()
  @IsInt()
  kmRecorridos: number;

  @IsInt()
  entregadoEmpleadoId: number;

  @IsOptional()
  @IsInt()
  recibidoEmpleadoId: number;

  @IsBoolean()
  gato_y_llave_de_rueda: boolean;

  @IsBoolean()
  baliza: boolean;

  @IsBoolean()
  ruedaAuxiliar: boolean;

  @IsBoolean()
  documentos: boolean;

  @IsBoolean()
  botiquin: boolean;

  @IsBoolean()
  extintor: boolean;

  @IsString()
  @IsEnum(modoDePago)
  modoDePago: modoDePago;

  @IsOptional()
  @IsString()
  factura: string;
}
