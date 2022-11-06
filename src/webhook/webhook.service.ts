import { Injectable } from "@nestjs/common";
import { Client as LineClient } from "@line/bot-sdk";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";
import { ConfigService } from "@nestjs/config";
import { exec } from "node:child_process";

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

    const _command = this.command(message);

    switch(_command[0]) {
      case "!deploy":
        if (_command[1] === "web")
          exec("/root/deploy-web.sh");
        else if (_command[1] === "api1")
          exec("/root/deploy-api1.sh");
        else if (_command[1] === "api2")
          exec("/root/deploy-api2.sh");
        else
          break;

        client.replyMessage(replyToken, {
          type: "text",
          text: `##DEPLOY ${_command[1].toUppercase()}##`,
        }).catch(err => {
          console.error(err.originalError.response.data);
        });

        
        break;

      case "!clean":
        client.replyMessage(replyToken, {
          type: "text",
          text: "##CLEAN UNUSE IMAGES AND BUILD CACHE##",
        }).catch(err => {
          console.error(err.originalError.response.data);
        });

        exec("docker image prune -a -f && docker builder prune -a -f");
        break;
      
      default:
        break;
    }

    return "okay";
  }

  command(message: any) {
    if (message.type === "text") {
      if (message.text.includes("!")) {
        return message.text.split(" ");
      }
    }
    return null;
  }
}
