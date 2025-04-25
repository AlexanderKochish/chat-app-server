import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(dto: CreateMessageDto) {
    return await this.prisma.message.create({
      data: {
        text: dto.text,
        roomId: dto.roomId,
        ownerId: dto.ownerId,
      },
    });
  }
}
