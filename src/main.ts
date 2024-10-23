// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Prefijo global opcional
  await app.listen(3000);
  console.log('Aplicación corriendo en http://localhost:3000');
}
bootstrap();