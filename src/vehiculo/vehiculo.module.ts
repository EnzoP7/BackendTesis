import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { EmpleadoModule } from 'src/empleado/empleado.module';

@Module({
  imports:[EmpleadoModule],
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}
