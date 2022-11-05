import { Injectable } from "@nestjs/common";
import { Client as LineClient } from "@line/bot-sdk";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class WebhookService {
  constructor(
    private configService: ConfigService,
  ) {
    this.configService.get<string>("configuration.channelSecret");
  }

  receiving(body: ReceiveWebhookDto) {
    console.log(body);
    const client = new LineClient({
      channelAccessToken: this.configService.get<string>("configuration.channelSecret"),
    });

    client.replyMessage(body.events.replyToken, {
      type: "text",
      text: "##DEPLOY##",
    });

    return "okay";
  }
}
