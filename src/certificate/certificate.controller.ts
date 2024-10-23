import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  async create(@Body() body: {
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
    return this.certificateService.createCertificate(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.certificateService.getCertificateById(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.certificateService.updateCertificate(+id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.certificateService.deleteCertificate(+id);
  }
}
