import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service'; // Importa PrismaService

@Module({
  providers: [AuthService, PrismaService], // Añade PrismaService
  controllers: [AuthController],
})
export class AuthModule {}
