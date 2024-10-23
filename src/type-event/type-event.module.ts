import { Module } from '@nestjs/common';
import { TypeEventService } from './type-event.service';
import { TypeEventController } from './type-event.controller';
import { PrismaService } from '../prisma/prisma.service'; // Para manejar la conexión a la base de datos

@Module({
  controllers: [TypeEventController],
  providers: [TypeEventService, PrismaService], // Asegúrate de incluir TypeEventService aquí
})
export class TypeEventModule {}
