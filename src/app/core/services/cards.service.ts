import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CardsService {
  constructor (
    private apiService: ApiService
  ) {}

  /**
   * Get cards catalogo from API
   */
  getAll(): Observable<any>{
    return this.apiService.get('catalogs/cards')
    .pipe(map(data => data));
  }

}
