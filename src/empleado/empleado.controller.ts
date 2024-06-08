import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { LoginEmpleadoDto } from './dto/login-empleado.dto';
import { Auth } from './decorators/auth.decorator';
import { JwtStrategy } from './strategies/jwt.strategy';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post("registro")
  // @UseGuards(JwtStrategy)
  // @Auth()
  RegistrarEmpleado(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadoService.create(createEmpleadoDto);
  }

@Post("login")
LoginEmpleado(@Body() loginEmpleadoDto :LoginEmpleadoDto){
  return this.empleadoService.loginEmpleado(loginEmpleadoDto);
}


  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadoService.update(+id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.remove(+id);
  }
}
