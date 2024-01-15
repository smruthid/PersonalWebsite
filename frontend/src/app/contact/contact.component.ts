import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  buttonClick = false;
  contactForm = new FormGroup({
    contactName: new FormControl('',
      [Validators.required]
    ),
    contactEmail: new FormControl('', 
      [Validators.required, Validators.email]
    ),
    contactSubject: new FormControl('',
      [Validators.required]
    ),
    contactMessage: new FormControl('',
      [Validators.required]
    )
  });

  get contactName() {
    return this.contactForm.get('contactName')
  }

  get contactEmail() {
    return this.contactForm.get('contactEmail')
  }

  get contactSubject() {
    return this.contactForm.get('contactSubject')
  }

  get contactMessage() {
    return this.contactForm.get('contactMessage')
  }

  onSubmit() {
    //this.user_name.setValue('Nancy');
    this.buttonClick = true;
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log("Error");
    }
  }
}
