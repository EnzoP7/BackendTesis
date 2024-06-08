import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  lasSucursales,
  losClientes,
  losEmpleados,
  losVehiculos,
} from 'data/data_db';

@Injectable()
export class SeedService {
  async InicializarSemilla() {
    const prisma = new PrismaClient();

    try {
      await prisma.sucursal.createMany({
        data: lasSucursales,
      });
      await prisma.vehiculo.createMany({
        data: losVehiculos,
      });
      await prisma.cliente.createMany({
        data: losClientes,
      });

      // await prisma.empleado.createMany({
      //   data: losEmpleados,
      // });

      console.log('SEED INICIALIZADA CORRECTAMENTE');
    } catch (error) {
      console.log(error);
    }
  }

  async limpiarBaseDeDatos() {
    const prisma = new PrismaClient();
    try {
    
      await prisma.vehiculo.deleteMany({});
      await prisma.cliente.deleteMany({});
      await prisma.empleado.deleteMany({});
      await prisma.sucursal.deleteMany({});

      console.log('SEED ELIMINADA CORRECTAMENTE');
    } catch (error) {
      console.log(error);
    }
  }
}
