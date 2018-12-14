import { NewAccount } from './../../app/core/interfaces/newAccount.interface';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { CardsComponent } from '../../app/core/components/cards.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountsService } from '../../app/core/services/accounts.service';
import { JwtProvider } from '../../app/core/providers/jwt.provider';

@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  newAccountForm: FormGroup;
  account: NewAccount = {} as NewAccount;
  result: any;
  @ViewChild(CardsComponent) child: CardsComponent;
  title = 'Select a card';
  okText= "ok";
  cancelText="cancel";

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public fb: FormBuilder,
              private accountService: AccountsService,
              private alertCtrl: AlertController,
              private jwtProvider: JwtProvider,) {
    this.newAccountForm = this.fb.group({
      card: ['', Validators.required]
    });
  }

  /**
   * This function print the combo´s card value
   */
  showModel(){
    console.log(this.child.value);
  }

  /**
   * This function send the request account
   */
  newAccount(): any {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.jwtProvider.getUserId().then((userId) => {
      
      this.account.type = this.child.value['type'];
      this.account.name = this.child.value['name'];
      this.account.userId = userId;

      this.accountService.newAccount(this.account)
      .subscribe(
        success => {
          this.result = success;
          loading.dismiss();
          this.confirm(this.result.success);
        },
        () => {
          loading.dismiss();
        }
      );

    });

  }

  /**
   * This function confirms the response of request account
   */
  confirm(msg) {
    let alert = this.alertCtrl.create({
      title: 'New Account',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
