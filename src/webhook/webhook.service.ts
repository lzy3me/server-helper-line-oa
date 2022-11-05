import { Injectable } from "@nestjs/common";
import { Client as LineClient } from "@line/bot-sdk";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";
import getConfig from "../configuration/configuration";

const config = getConfig();

console.log(config);

@Injectable()
export class WebhookService {
  receiving(body: ReceiveWebhookDto) {
    console.log(body);
    const client = new LineClient({
      channelAccessToken: config.channelSecret,
    });

    client.replyMessage(body.events.replyToken, {
      type: "text",
      text: "##DEPLOY##",
    });

    return "okay";
  }
}
