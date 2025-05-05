import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UploadService } from 'src/upload/upload.service';
import { randomUUID } from 'crypto';
import { UploadApiResponse } from 'cloudinary';

@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  async saveMessage(dto: CreateMessageDto) {
    if (!dto.text || dto.images?.length === 0) {
      throw new BadRequestException('Message is not must be empty');
    }

    const imageUrl: string[] = [];

    for (const image of dto.images) {
      const fileBuffer = Buffer.from(image.buffer);

      const results = (await this.uploadService.uploadStreamBuffer(fileBuffer, {
        folder: 'chatter/messeges',
        resource_type: 'image',
        public_id: `${dto.ownerId}-${randomUUID()}`,
      })) as UploadApiResponse;

      imageUrl.push(results.secure_url);
    }

    return await this.prisma.message.create({
      data: {
        text: dto.text,
        roomId: dto.roomId,
        ownerId: dto.ownerId,
        images: {
          create: imageUrl.map((url) => ({ url })),
        },
      },
    });
  }
}
