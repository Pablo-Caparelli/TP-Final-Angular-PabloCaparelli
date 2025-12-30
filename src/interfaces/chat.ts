import { Message } from './message';

export interface Chat {
  id: string;
  name: string;
  image: string;
  lastMessage?: string;
  messages: Message[];
}
