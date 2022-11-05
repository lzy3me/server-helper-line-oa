import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: ["https://webapp-test-serv.tk", "https://api.line.me"] });
  app.setGlobalPrefix("/825LWPpNpw/api/line")

  await app.listen(6969);
}
bootstrap();
