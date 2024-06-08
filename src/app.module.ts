import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { SeedModule } from 'src/seed/seed.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { AlquilerModule } from './alquiler/alquiler.module';



@Module({
  imports: [ClienteModule, VehiculoModule, SucursalModule,SeedModule, EmpleadoModule,AlquilerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
