import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { MessageModule } from './message/message.module';
import { EventsModule } from './events/events.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    ChatroomModule,
    MessageModule,
    EventsModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
