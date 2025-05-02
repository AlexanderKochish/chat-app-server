import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private redis = new Redis({
    host: 'localhost',
    port: 6379,
    db: 0,
  });

  async notifyUserOnline(userId: string) {
    await this.redis.set(`user:${userId}:online`, 'true', 'EX', 3000);
  }

  async notifyUserOffline(userId: string) {
    await this.redis.del(`user:${userId}:online`);
  }

  async isUserOnline(usersIds: string[]) {
    const pipeline = this.redis.pipeline();
    usersIds.forEach((id) => pipeline.get(`user:${id}:online`));

    const result = await pipeline.exec();
    if (!result) return {};

    const statuses = usersIds.reduce(
      (acc, id, i) => {
        acc[id] = result[i][1] === 'true';
        return acc;
      },
      {} as Record<string, boolean>,
    );
    return statuses;
  }
}
