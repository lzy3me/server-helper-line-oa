import { Module } from "@nestjs/common";
import { WebhookService } from "./webhook.service";
import { WebhookController } from "./webhook.controller";
import { ConfigurationModule } from "src/configuration/configuration.module";

@Module({
  imports: [ConfigurationModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
