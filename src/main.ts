import { NestFactory } from '@nestjs/core';

import 'dotenv/config';

import { AppModule } from './app.module';
import swagger from './config/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  swagger.init(app);

  await app.listen(3000);
}

bootstrap();
