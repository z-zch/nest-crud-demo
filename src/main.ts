import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

function middleWareAll(req, res, next) {
  console.log(req.originalUrl, 'middleware all');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(middleWareAll);
  await app.listen(3000);
}
bootstrap();
