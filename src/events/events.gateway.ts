import { UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import { MessageService } from 'src/message/message.service';
import { RedisService } from 'src/redis/redis.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private messageService: MessageService,
    private redisService: RedisService,
  ) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    const userId = client.handshake.auth.userId as string;

    if (userId) {
      await this.redisService.notifyUserOnline(userId);
    }
  }
  async handleDisconnect(client: Socket) {
    const userId = client.handshake.auth.userId as string;

    if (userId) {
      await this.redisService.notifyUserOffline(userId);
    }
  }

  @SubscribeMessage('sendMessage')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async findMessage(
    @MessageBody()
    data: CreateMessageDto,
  ) {
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
