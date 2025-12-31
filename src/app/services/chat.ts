import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Chat } from '../../interfaces/chat';
import { Message } from '../../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  /* Mook de chats guardado */
  /*private _chats: WritableSignal<Chat[]> = signal(this.createMook());
  public readonly chats: Signal<Chat[]> = this._chats;
  constructor() {}*/
  private readonly STORAGE_KEY = 'chats-data';

  private _chats: WritableSignal<Chat[]> = signal(this.loadChats());
  public readonly chats: Signal<Chat[]> = this._chats;

  constructor() {}

  private loadChats(): Chat[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return this.createMook();
      }
    }
    return this.createMook();
  }

  private saveChats(chats: Chat[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(chats));
  }

  /* CARGA DATOS mook (de prueba) */
  private createMook(): Chat[] {
    const now = new Date().toISOString();
    return [
      {
        id: '1',
        name: 'Lucía',
        image: 'assets/foto1.jpeg',
        lastMessage: 'Nos vemos mañana',
        messages: [
          {
            id: '1',
            text: 'Hola!',
            fromMe: false,
            date: new Date().toISOString(),
          },
          {
            id: '2',
            text: 'Que tal?',
            fromMe: true,
            date: new Date().toISOString(),
          },
        ],
      },
    ];
  }

  getChatsSnapshot(): Chat[] {
    return this._chats();
  }

  /* Obtener chat por id */
  getChatSignal(id: string): Signal<Chat | undefined> {
    return computed(() => {
      return this._chats().find((chat) => chat.id === id);
    });
  }

  /* Crear un chat */
  createChat(name: string, image: string): Chat {
    //Creo el chat a partir de los datos recibidos
    const new_chat: Chat = {
      id: Date.now().toString(),
      name,
      image,
      lastMessage: '',
      messages: [],
    };
    /* Actualizo la señal */
    /*this._chats.update((chats_actuales) => {
      return [...chats_actuales, new_chat];
    });
    return new_chat;*/
    this._chats.update((chats) => {
      const updated = [...chats, new_chat];
      this.saveChats(updated);
      return updated;
    });
    return new_chat;
  }

  deleteChat(contactId: string) {
    //this._chats.update((contacts) => contacts.filter((contact) => contact.id !== contactId));
    this._chats.update((chats) => {
      const updated = chats.filter((c) => c.id !== contactId);
      this.saveChats(updated);
      return updated;
    });
  }

  sendMessage(chat_id: string, text: string, fromMe = true): Message | undefined {
    const new_message: Message = {
      id: Date.now().toString(),
      text: text,
      fromMe: fromMe,
      date: new Date().toISOString(),
    };

    /*this._chats.update((chats_actuales) => {
      return chats_actuales.map((chat) => {
        /* Si no son el chat que quiero actualizar dejo el mensaje asi como esta */
    /*if (chat.id !== chat_id) {
          return chat;
        }
        const updated_messages = [...chat.messages, new_message];
        return {
          ...chat,
          messages: updated_messages,
          lastMessage: text,
        };
      });
    });
    return new_message;
  }
}*/
    this._chats.update((chats) => {
      const updated = chats.map((chat) => {
        if (chat.id !== chat_id) return chat;

        const updated_messages = [...chat.messages, new_message];

        return {
          ...chat,
          messages: updated_messages,
          lastMessage: text,
        };
      });

      this.saveChats(updated);
      return updated;
    });
    return new_message;
  }

  deleteMessage(chatId: string, messageId: string) {
    this._chats.update((chats) => {
      const updated = chats.map((chat) => {
        if (chat.id !== chatId) return chat;

        const newMessages = chat.messages.filter((m) => m.id !== messageId);

        return {
          ...chat,
          messages: newMessages,
          lastMessage: newMessages.at(-1)?.text ?? '',
        };
      });

      this.saveChats(updated);
      return updated;
    });
  }
}
