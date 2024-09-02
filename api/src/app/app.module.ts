import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { ContactGroupModule } from './contact-group/contact-group.module';

@Module({
  imports: [UserModule, ContactModule, ContactGroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
