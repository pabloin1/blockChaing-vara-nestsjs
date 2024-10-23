import { Module } from '@nestjs/common';
import { GearModule } from './gear/gear.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { TypeEventModule } from './type-event/type-event.module';
import { CertificateModule } from './certificate/certificate.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    GearModule, 
    AuthModule, 
    UserModule, 
    EventModule, 
    TypeEventModule,
    CertificateModule, 
    SkillModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
