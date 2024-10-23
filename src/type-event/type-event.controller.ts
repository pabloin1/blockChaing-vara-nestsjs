import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeEventService } from './type-event.service';
import { CreateTypeEventDto } from '../Dtos/create-type-event.dto';

@Controller('type-event')
export class TypeEventController {
  constructor(private readonly typeEventService: TypeEventService) {}

  // Crear un nuevo tipo de evento
  @Post()
  async create(@Body() createTypeEventDto: CreateTypeEventDto) {
    return this.typeEventService.create(createTypeEventDto);
  }

  // Obtener todos los tipos de evento
  @Get()
  async findAll() {
    return this.typeEventService.findAll();
  }

  // Obtener un tipo de evento por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.typeEventService.findOne(+id);
  }

  // Actualizar un tipo de evento por ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTypeEventDto: CreateTypeEventDto) {
    return this.typeEventService.update(+id, updateTypeEventDto);
  }

  // Eliminar un tipo de evento por ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.typeEventService.remove(+id);
  }
}
