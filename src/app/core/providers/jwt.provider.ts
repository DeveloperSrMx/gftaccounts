import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as JWT from 'jwt-decode';
import { Observable } from 'rxjs';

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

  saveUserId(token: any): Promise<any>{
    let userData = JWT(token);
    return this.storage.set('userId', userData['id']);
  }

  getUserId(): Promise<any> {
    return this.storage.get('userId');
  }

  destroyToken() {
    this.storage.remove('jwtToken');
  }

}
