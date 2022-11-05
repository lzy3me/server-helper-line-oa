import { Injectable } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import * as crypto from 'crypto';
import ReceiveWebhookDto from './dto/receive-webhook.dto';

@Injectable()
export class WebhookService {
  create(createWebhookDto: CreateWebhookDto) {
    return 'This action adds a new webhook';
  }

  findAll() {
    return `This action returns all webhook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhook`;
  }

  update(id: number, updateWebhookDto: UpdateWebhookDto) {
    return `This action updates a #${id} webhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhook`;
  }

  receiving(body: ReceiveWebhookDto) {
    // const channelSecret = process.env.LINE_CHANNEL_SECRET;

    console.log(body);
    
    return { success: true };
  }
}
