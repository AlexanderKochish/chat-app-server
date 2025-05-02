import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(helmet());
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    credentials: true,
  });
  app.use(cookieParser());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
      db: 0,
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
