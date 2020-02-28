import { Module } from '@nestjs/common';

import controllers from './app/controllers';
import services from './app/services';

console.log('services');

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
