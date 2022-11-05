export default class ReceiveWebhookDto {
  destination: string;
  events: Events
}

class Events {
  type: string;
  message: any;
  webhookEventId: string;
  deliveryContext: any;
  timestamp: string;
  source: any;
  replyToken: string;
  mode: string;
}