import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { JwtStrategy } from './strategies/jwt.strategy';

const prisma = new PrismaClient();

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService, JwtStrategy],
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),
  ],
  exports:[JwtStrategy,JwtModule,PassportModule]
})
export class EmpleadoModule {}