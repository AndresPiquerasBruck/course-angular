import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor() {}

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password)
    form.reset()
  }

}