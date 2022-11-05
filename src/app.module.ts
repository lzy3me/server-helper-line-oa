import { Module } from "@nestjs/common";
import { WebhookModule } from "./webhook/webhook.module";
import { ConfigurationModule } from "./configuration/configuration.module";

@Module({
  imports: [ConfigurationModule, WebhookModule],
})
export class AppModule {}
