import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt'; // Para encriptar contraseñas

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(username: string, password: string, email: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña

    // Guardar el nuevo usuario en la base de datos usando Prisma
    const newUser = await this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

    return newUser;
  }

  async validateUser(username: string, password: string): Promise<any> {
    // Buscar el usuario por nombre usando Prisma
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      // Si la contraseña es correcta, retorna el usuario
      return user;
    }
    return null;
  }
}
