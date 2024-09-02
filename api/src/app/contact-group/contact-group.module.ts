import { Module } from '@nestjs/common';
import { ContactGroupService } from './contact-group.service';
import { ContactGroupController } from './contact-group.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ContactGroupService],
  controllers: [ContactGroupController],
})
export class ContactGroupModule {}
