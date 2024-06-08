import { Controller, Post, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  create( ) {
    return this.seedService.InicializarSemilla();
  }


  @Delete()
  remove() {
    return this.seedService.limpiarBaseDeDatos();
  }
}
