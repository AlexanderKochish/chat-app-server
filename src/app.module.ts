import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { MessageModule } from './message/message.module';
import { EventsModule } from './events/events.module';
import { UploadModule } from './upload/upload.module';
import { CloudinaryModule } from './configs/cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    PrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    ChatroomModule,
    MessageModule,
    EventsModule,
    UploadModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
