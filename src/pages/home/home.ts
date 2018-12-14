import { CardsComponent } from './../../app/core/components/cards.component';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

@ViewChild(CardsComponent) child: CardsComponent;

  lookupDataTitle = 'Cards';
  okText= "ok";
  cancelText="cancel";

  constructor(public navCtrl: NavController) {

  }

  showModel(){
    console.log(this.child.value);
  }
}
