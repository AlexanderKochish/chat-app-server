import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { AuthRequest } from 'src/auth/types/auth.interface';

@Controller('chats')
export class ChatroomController {
  constructor(private readonly chatroomService: ChatroomService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(
    @Body() data: { targetUserId: string },
    @Req() req: AuthRequest,
  ) {
    const { userId } = req['user'];
    return await this.chatroomService.create(userId, data.targetUserId);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Req() req: AuthRequest) {
    const user = req['user'];
    return await this.chatroomService.findAllChatRoom(user.userId);
  }

  @UseGuards(AuthGuard)
  @Get(':roomId')
  async findOneChat(@Param('roomId') roomId: string, @Req() req: AuthRequest) {
    const userId = req['user'].userId;
    return await this.chatroomService.findOneChat(roomId, userId);
  }

  @Get(':roomId/companion')
  @UseGuards(AuthGuard)
  async getCompanion(@Param('roomId') roomId: string, @Req() req: AuthRequest) {
    const userId = req['user'].userId;
    return await this.chatroomService.getCompanion(roomId, userId);
  }
}
