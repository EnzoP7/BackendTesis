import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { EmpleadoModule } from 'src/empleado/empleado.module';

@Module({
  imports:[EmpleadoModule],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
