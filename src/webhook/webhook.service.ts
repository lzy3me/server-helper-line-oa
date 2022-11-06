import { Injectable } from "@nestjs/common";
import { Client as LineClient } from "@line/bot-sdk";
import ReceiveWebhookDto from "./dto/receive-webhook.dto";
import { ConfigService } from "@nestjs/config";
import { spawn } from "node:child_process";

@Injectable()
export class WebhookService {
  constructor(private configService: ConfigService) {
    this.configService.get<string>("configuration.channelSecret");
  }

  receiving(body: ReceiveWebhookDto) {
    console.log(body);
    const client = new LineClient({
      channelAccessToken: this.configService.get<string>(
        "configuration.channelSecret",
      ),
    });

    client.replyMessage(body.events.replyToken, {
      type: "text",
      text: "##DEPLOY##",
    });

    const ls = spawn("ls", ["-lh", "/usr"]);
    ls.stdout.on("data", (data) => {
      console.log("stdout: ", data);
    });

    ls.stderr.on("data", (data) => {
      console.error("stderr: ", data);
    });

    ls.on("close", (code) => {
      console.log("child process exited with code ", code);
    })

    return "okay";
  }
}
