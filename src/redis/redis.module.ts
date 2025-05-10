import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import Redis from 'ioredis';

@Module({
  controllers: [RedisController],
  providers: [
    {
      provide: 'REDIS',
      useFactory: () => {
        return new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: Number(process.env.REDIS_PORT) || 6379,
          db: 0,
        });
      },
    },

    RedisService,
  ],
  exports: [RedisService, 'REDIS'],
})
export class RedisModule {}
