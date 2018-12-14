import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountsService {
  constructor (
    private apiService: ApiService
  ) {}

  /**
   * Get user accounts from API
   */
  getAll(): Observable<any>{
    return this.apiService.get('accounts')
    .pipe(map(data => data));
  }

  /**
   * Get user accounts from mock
   */
  getMock(): Observable<any> {
    return this.apiService.getMock('/assets/mocks/accounts.json')
      .pipe(map(data => data));
  }

  /**
   * Send request for new account.
   */
  newAccount(account): Observable<any>{
    return this.apiService.post('accounts', account)
    .pipe(map(data => data));    
  }

}
