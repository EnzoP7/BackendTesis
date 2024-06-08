import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';



async function bootstrap() {
  const logger = new Logger("Main")
  const app = await NestFactory.create(AppModule);




  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );


  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(envs.port);
  logger.log(`App Corriendo en puerto ${envs.port}`);
}
bootstrap();
