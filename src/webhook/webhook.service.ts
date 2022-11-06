import { Injectable } from "@nestjs/common";
import { Client as LineClient } from "@line/bot-sdk";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";
import { ConfigService } from "@nestjs/config";
import { spawn } from "node:child_process";

@Injectable()
export class WebhookService {
  constructor(private configService: ConfigService) {
  }

  receiving(body: ReceiveWebhookDto) {
    const { events } = body;
    const { replyToken, message } = events[0];
    console.log("🚀 ~ file: webhook.service.ts ~ line 17 ~ WebhookService ~ receiving ~ replyToken", replyToken)
    console.log("🚀 ~ file: webhook.service.ts ~ line 17 ~ WebhookService ~ receiving ~ message", message)

    
    const client = new LineClient({
      channelAccessToken: process.env.LINE_CHANNEL_TOKEN,
    });

    switch(message.text) {
      case "!deploy web":
        console.log("Deploy web");
        client.replyMessage(replyToken, {
          type: "text",
          text: "##DEPLOY WEB##",
        }).catch(err => {
          console.error(err.originalError.response.data);
        });
        break;

      case "!deploy api1":
        console.log("Deploy api1");
        client.replyMessage(replyToken, {
          type: "text",
          text: "##DEPLOY API v1##",
        }).catch(err => {
          console.error(err.originalError.response.data);
        });
        break;

      case "!deploy api2":
        console.log("Deploy api2");
        client.replyMessage(replyToken, {
          type: "text",
          text: "##DEPLOY API v2##",
        }).catch(err => {
          console.error(err.originalError.response.data);
        });
        break;
      default:
        break;
    }

    return "okay";
  }
}
