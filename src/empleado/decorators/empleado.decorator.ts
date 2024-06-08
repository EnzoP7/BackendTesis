import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';



export const empleado = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {


    const request = ctx.switchToHttp().getRequest();

    if ( !request.empleado ) {
      throw new InternalServerErrorException('empleado not found in request (AuthGuard called?)');
    }

    return request.empleado;
  },
);