import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/825LWPpNpw/api/line")

  await app.listen(3000);
}
bootstrap();
