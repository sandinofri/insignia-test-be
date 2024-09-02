import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactGroupService {
  constructor(private prisma: PrismaService) {}

  async createContactGroup(data: Prisma.ContactGroupCreateInput) {
    return this.prisma.contactGroup.create({ data });
  }

  async getContactGroup(id: number) {
    return this.prisma.contactGroup.findUnique({ where: { id } });
  }

  async updateContactGroup(id: number, data: Prisma.ContactGroupUpdateInput) {
    return this.prisma.contactGroup.update({
      where: { id },
      data,
    });
  }

  async deleteContactGroup(id: number) {
    return this.prisma.contactGroup.delete({ where: { id } });
  }

  async listContactGroups() {
    return this.prisma.contactGroup.findMany();
  }
}
