import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  contactForm = new FormGroup({
    contactName: new FormControl(''),
    contactEmail: new FormControl(''),
    contactSubject: new FormControl(''),
    contactMessage: new FormControl('')
  });

  onSubmit() {
    //this.user_name.setValue('Nancy');
    console.log(this.contactForm.value)
  }
}
