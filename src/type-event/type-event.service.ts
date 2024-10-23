import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTypeEventDto } from '../Dtos/create-type-event.dto';

@Injectable()
export class TypeEventService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo tipo de evento
  async create(createTypeEventDto: CreateTypeEventDto) {
    return this.prisma.type_Event.create({
      data: createTypeEventDto,
    });
  }

  // Obtener todos los tipos de evento
  async findAll() {
    return this.prisma.type_Event.findMany();
  }

  // Obtener un tipo de evento por su ID
  async findOne(id: number) {
    return this.prisma.type_Event.findUnique({
      where: { id },
    });
  }

  // Actualizar un tipo de evento por su ID
  async update(id: number, updateTypeEventDto: CreateTypeEventDto) {
    return this.prisma.type_Event.update({
      where: { id },
      data: updateTypeEventDto,
    });
  }

  // Eliminar un tipo de evento por su ID
  async remove(id: number) {
    return this.prisma.type_Event.delete({
      where: { id },
    });
  }
}
