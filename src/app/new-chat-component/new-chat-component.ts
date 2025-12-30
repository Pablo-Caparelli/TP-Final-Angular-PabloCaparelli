import { Component } from '@angular/core';
import { ChatService } from '../services/chat';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-chat-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-chat-component.html',
  styleUrl: './new-chat-component.css',
})
export class NewChatComponent {
  name = '';
  initial = '';
  constructor(private chatService: ChatService, private router: Router) {}

  create() {
    if (!this.name.trim()) {
      return;
    }

    const image = 'assets/foto1.jpeg';

    const chat = this.chatService.createChat(this.name.trim(), image);
    if (this.initial.trim()) {
      this.chatService.sendMessage(chat.id, this.initial.trim(), true);
    }
    this.router.navigate(['/chats', chat.id]);
  }

  cancel() {
    this.router.navigate(['/chats']);
  }
}
