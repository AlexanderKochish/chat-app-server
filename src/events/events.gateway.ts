import { UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
  },
})
export class ChatGateway {
  constructor(private messageService: MessageService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async findMessage(@MessageBody() data: CreateMessageDto) {
    console.log(data);
    try {
      const saveMessage = await this.messageService.saveMessage(data);
      this.server.to(data.roomId).emit('newMessage', saveMessage);
    } catch (err) {
      console.error('Error while saving message:', err);
      throw err;
    }
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: Socket,
  ) {
    await client.join(roomId);
  }
}
