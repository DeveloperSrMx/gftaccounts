import { UserInterface } from './../../app/core/interfaces/user.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/core/services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userForm: FormGroup;
  user: UserInterface = {} as UserInterface;
  result: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService: UserService,
    private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  loginUser(): any {
    
    this.user = this.userForm.value;

    this.userService.login(this.user)
      .subscribe(
        success => {
          this.result = success;
        },
        () => {
          //on error
        }
      );
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

}
