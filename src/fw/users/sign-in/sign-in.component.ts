import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formError: string;
  submitting = false;
  constructor(private userapi: UserApi, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(signInForm: NgForm) {
    if (signInForm.valid) {
      this.submitting = true;
      this.formError = null;
      this.userapi.signin(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
          this.router.navigate(['/authenticated']);
        },
        err => {
          this.submitting = false;
          this.formError = err;
        });
    }
  }

}
