export default class ReceiveWebhookDto {
  destination: string;
  events: Events
}

class Events {
  type: string;
  message: Message;
  webhookEventId: string;
  deliveryContext: {
    isRedelivery: boolean;
  };
  timestamp: string;
  source: Source;
  replyToken: string;
  mode: string;
}

class Message {
  type: string;
  id: string;
  text: string;
}

class Source {
  type: string;
  userId: string;
}