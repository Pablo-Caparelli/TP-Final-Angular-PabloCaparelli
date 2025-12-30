import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ChatService } from '../services/chat';
import { AddNewContact } from '../add-new-contact/add-new-contact';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-chats-component',
  imports: [CommonModule, RouterModule, AddNewContact, SearchBarComponent],
  templateUrl: './chats-component.html',
  styleUrl: './chats-component.css',
  standalone: true,
})
export class ChatsComponent {
  selectedChatId = signal<string | null>(null);

  selectedChat = computed(() => {
    const id = this.selectedChatId();
    if (!id) return null;
    return this.chatService.getChatSignal(id)();
  });

  constructor(public chatService: ChatService, private router: Router) {}

  // open(id: string) {
  //   this.router.navigate(['/chats', id]);
  // }

  open(id: string) {
    this.selectedChatId.set(id);
  }

  filteredChats = computed(() => {
    const text = this.searchText.trim();
    return this.chatService.chats().filter((chat) => chat.name.toLowerCase().includes(text));
  });

  nuevo() {
    this.router.navigate(['/nuevo']);
  }

  onAddChat(data: { name: string; image: string }) {
    const newChat = this.chatService.createChat(data.name, data.image);
    this.selectedChatId.set(newChat.id);
  }

  deleteChat(id: string) {
    if (confirm('¿Está seguro que quiere eliminar este contacto?')) {
      this.chatService.deleteChat(id);
    }
  }

  searchText = '';

  onSearchChange(value: string) {
    this.searchText = value.toLowerCase();
  }
}
