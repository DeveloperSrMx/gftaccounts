import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from '../../app/core/interfaces/user.interface';
import { UserService } from '../../app/core/services/user.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  user: UserInterface = {} as UserInterface;
  result: any;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    private userService: UserService,
  ) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup(): any {

    this.user = this.signupForm.value;

    this.userService.signup(this.user)
      .subscribe(
        success => {
          this.result = success;
        },
        () => {
          //on error
        }
      );

  }

}
