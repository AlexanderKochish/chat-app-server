import { Injectable } from '@nestjs/common';
// import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';

@Injectable()
export class ChatroomService {
  constructor(private prisma: PrismaService) {}
  async findExistingRoom(currentUserId: string, targetUserId: string) {
    return await this.prisma.chatRoom.findFirst({
      where: {
        isGroup: false,
        members: {
          some: {
            userId: currentUserId,
          },
        },
        AND: {
          members: {
            some: {
              userId: targetUserId,
            },
          },
        },
      },
    });
  }
  async create(dto: CreateChatroomDto) {
    const existingRoom = await this.findExistingRoom(
      dto.currentUserId,
      dto.targetUserId,
    );

    if (existingRoom) {
      return existingRoom;
    }

    return await this.prisma.chatRoom.create({
      data: {
        isGroup: false,
        createdById: dto.currentUserId,
        members: {
          create: [
            {
              userId: dto.currentUserId,
              isMuted: false,
              isBanned: false,
            },
            {
              userId: dto.targetUserId,
              isMuted: false,
              isBanned: false,
            },
          ],
        },
      },
    });
  }

  async findAll(id: string) {
    return await this.prisma.chatRoom.findMany({
      where: {
        members: {
          some: {
            userId: id,
          },
        },
      },
      include: {
        members: true,
        message: true,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} chatroom`;
  // }

  // update(id: number, uDto: UpdateChatroomDto) {
  //   return `This action updates a #${id} chatroom`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} chatroom`;
  // }
}
