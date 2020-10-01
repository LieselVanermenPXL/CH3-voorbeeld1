import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch3-voorbeeld1';
  myContact: Contact;

  ngOnInit(): void {
    this.myContact = new Contact(
      'Liesel V',
      'lieselv@gmail.com',
      '01166424893',
      true,
      'assets/avatar.png'
    );

  }
}
