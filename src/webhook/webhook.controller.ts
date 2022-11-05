import { Controller, Post, Body } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";

@Controller("webhook")
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post("receiver")
  create(@Body() body: ReceiveWebhookDto) {
    return this.webhookService.receiving(body);
  }
}
