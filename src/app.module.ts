// app.module.ts
import { Module } from '@nestjs/common';
import { GearModule } from './gear/gear.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    GearModule, 
    AuthModule, UserModule
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService, PrismaService, UserService],
})

export class AppModule {}