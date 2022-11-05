import { Injectable } from '@nestjs/common';
import { Client as LineClient } from '@line/bot-sdk';
import ReceiveWebhookDto from './dto/receive-webhook.dto';

@Injectable()
export class WebhookService {
  receiving(body: ReceiveWebhookDto) {
    console.log(body);
    const client = new LineClient({
      channelAccessToken: process.env.LINE_CHANNEL_TOKEN,
    });

    client.replyMessage(body.events.replyToken, {
      type: 'text',
      text: '##DEPLOY##'
    });
    
    return 'okay';
  }
}
