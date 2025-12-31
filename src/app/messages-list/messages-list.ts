import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../interfaces/message';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
})
export class MessagesListComponent {
  @Input() messages: Message[] = [];

  @Output() deleteMessage = new EventEmitter<string>();

  faTrashCan = faTrashCan;

  onDelete(id: string) {
    this.deleteMessage.emit(id);
  }
}
