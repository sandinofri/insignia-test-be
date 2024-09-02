import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.module';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async createContact(data: Prisma.ContactCreateInput) {
    return this.prisma.contact.create({ data });
  }

  async getContact(id: number) {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async updateContact(id: number, data: Prisma.ContactUpdateInput) {
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async deleteContact(id: number) {
    return this.prisma.contact.delete({ where: { id } });
  }

  async listContacts() {
    return this.prisma.contact.findMany();
  }
}
