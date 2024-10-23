import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDto: { name: string }) {
    return this.prisma.skill.create({
      data: createDto,
    });
  }

  async findAll() {
    return this.prisma.skill.findMany();
  }

  async findOne(id: number) {
    return this.prisma.skill.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDto: { name?: string }) {
    return this.prisma.skill.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number) {
    return this.prisma.skill.delete({
      where: { id },
    });
  }
}
