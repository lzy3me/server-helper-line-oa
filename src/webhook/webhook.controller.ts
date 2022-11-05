import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import ReceiveWebhookDto from './dto/receive-webhook.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post("receiver")
  create(@Body() body: ReceiveWebhookDto) {
    return this.webhookService.receiving(body);
  }
}
