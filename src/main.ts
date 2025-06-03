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
    origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    credentials: true,
  });
  app.use(cookieParser());

  const redisUrl = process.env.REDIS_URL;
  const redisOption = redisUrl
    ? { url: redisUrl, tls: {} }
    : {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD || '',
      };
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: redisOption,
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
