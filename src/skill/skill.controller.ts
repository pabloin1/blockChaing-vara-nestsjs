import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  async create(@Body() createDto: { name: string }) {
    const skill = await this.skillService.create(createDto);
    return { message: 'Habilidad creada con éxito', skill };
  }

  @Get()
  async findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.skillService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: { name?: string }) {
    return this.skillService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.skillService.remove(id);
  }
}
