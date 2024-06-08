import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

const prisma = new PrismaClient();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    const { id } = payload;

    try {
      const empleado = await prisma.empleado.findUnique({
        where: { id: Number(id) }
      });

      if (!empleado) {
        throw new Error('User not found');
      }

      return empleado;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}