import { Module } from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { ChatroomController } from './chatroom.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [ChatroomController],
  providers: [ChatroomService],
  imports: [PrismaModule],
})
export class ChatroomModule {}
