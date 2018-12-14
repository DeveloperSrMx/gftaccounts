import { AccountsService } from './../../app/core/services/accounts.service';
import { CardsComponent } from './../../app/core/components/cards.component';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../app/core/interfaces/account.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  accounts: Account[];
  @ViewChild(CardsComponent) child: CardsComponent;
  title = 'Cards';
  okText= "ok";
  cancelText="cancel";


  constructor(public navCtrl: NavController, private accountsService: AccountsService) {

  }
  
  /**
   * This function print the combo´s card value
   */
  showModel(){
    console.log(this.child.value);
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
    // this.navCtrl.push(NewAccountPage);
  }

  ngOnInit() {
    this.populateCards();
  }
}
