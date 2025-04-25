import { Module } from '@nestjs/common';
import { ChatGateway } from './events.gateway';
import { MessageModule } from 'src/message/message.module';

@Module({
  providers: [ChatGateway],
  imports: [MessageModule],
})
export class EventsModule {}
