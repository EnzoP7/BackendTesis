
import { PrismaClient } from '@prisma/client';


import { META_ROLES } from '../decorators/role-protected.decorator';
import { BadGatewayException, BadRequestException, ExecutionContext } from '@nestjs/common';

const prisma = new PrismaClient();

export class UserRoleGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const validRoles: string[] = []; // Define tus roles válidos aquí

    const handler = context.getHandler();
    const metadata = Reflect.getMetadata(META_ROLES, handler);
    if (!metadata) return true;
    if (metadata.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('User not found');

    const user = await prisma.empleado.findUnique({
      where: { id: userId },
      include: { sucursal: true },
    });

    if (!user) throw new BadGatewayException('User not found');

    console.log({ userRoles: user.rol });

    if (validRoles.includes(user.rol)) {
      return true;
    }

    throw new Error(`User ${user.nombre} ${user.apellido} needs a valid role: [${validRoles}]`);
  }
}