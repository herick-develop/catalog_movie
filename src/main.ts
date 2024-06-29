import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Movie Colection API')
    .setDescription('generate your token using the /auth/login route and authorize the route using the padlock')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authenticate')
    .addTag('Movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
