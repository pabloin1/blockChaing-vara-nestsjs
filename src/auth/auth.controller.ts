import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registerDto: { username: string; password: string; email: string },
  ) {
    const user = await this.authService.register(
      registerDto.username,
      registerDto.password,
      registerDto.email,
    );
    return { message: 'Registro exitoso', user };
  }

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );

    if (!user) {
      return { message: 'Usuario o contraseña incorrecta' };
    }

    // Retornar solo el id, username y email
    return {
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
}
