import { Module } from '@nestjs/common';

import controllers from './app/controllers';
import services from './app/services';
import database from './config/database';

@Module({
  imports: [database],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
