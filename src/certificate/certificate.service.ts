import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CertificateService {
  constructor(private prisma: PrismaService) {}

  async createCertificate(data: {
    name: string;
    description: string;
    price: number;
    rating: number;
    lesson: number;
    duration: number;
    skill_level: string;
    enrolled: number;
    articles: number;
    downloads: number;
    id_organization: number;
    skillIds: number[];
  }) {
    const { skillIds, ...certificateData } = data;

    return this.prisma.certificate.create({
      data: {
        ...certificateData,
        skills: {
          create: skillIds.map((skillId) => ({
            skill: {
              connect: { id: skillId },
            },
          })),
        },
      },
      include: {
        skills: true, // Para incluir las skills en la respuesta
      },
    });
  }

  async getCertificateById(id: number) {
    return this.prisma.certificate.findUnique({
      where: { id },
      include: {
        skills: true, // Incluye las skills relacionadas
      },
    });
  }

  async updateCertificate(id: number, data: Prisma.CertificateUpdateInput) {
    return this.prisma.certificate.update({
      where: { id },
      data,
    });
  }

  async deleteCertificate(id: number) {
    return this.prisma.certificate.delete({
      where: { id },
    });
  }
}
