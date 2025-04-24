import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { ChatroomModule } from './chatroom/chatroom.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    ChatroomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
