import { AccountsService } from './../../app/core/services/accounts.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../app/core/interfaces/account.interface';
import { NewAccountPage } from '../new-account/new-account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  accounts: Account[];

  constructor(public navCtrl: NavController, private accountsService: AccountsService) {

  }

  /**
   * This function populates the user accounts
   */
  populateCards() {
    this.accountsService.getAll()
      .subscribe(
        success => {
          this.accounts = success.response;
        },
        () => {
          //on error here
        }
      );
  }

  newAccount() {
    this.navCtrl.push(NewAccountPage);
  }

  ngOnInit() {
    this.populateCards();
  }
}
