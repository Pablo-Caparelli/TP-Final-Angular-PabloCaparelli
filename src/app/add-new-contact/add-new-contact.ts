import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-contact.html',
  styleUrl: './add-new-contact.css',
})
export class AddNewContact {
  name: string = '';
  image: string = '';

  @Output() addNewContact = new EventEmitter<{ name: string; image: string }>();

  handleSubmit() {
    this.addNewContact.emit({
      name: this.name,
      image: this.image,
    });

    // limpiar formulario
    this.name = '';
    this.image = '';
  }
}
