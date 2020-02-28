import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function init(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('API NestJs')
    .setDescription('API documentation description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

export default {
  init,
};
