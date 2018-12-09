import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class JwtProvider {

  constructor(private storage: Storage) { }

  getToken(): any {
    this.storage.get('jwtToken').then((val) => {
      return val;
    });
  }

  saveToken(token: String) {
    this.storage.set('jwtToken', token);
  }

  destroyToken() {
    this.storage.remove('jwtToken');
  }

}
