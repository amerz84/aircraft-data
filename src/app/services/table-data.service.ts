import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private _isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this._isTableLoaded.asObservable();

  constructor() {}
  
  toggleIsTableLoaded(isTableLoaded) {
    this._isTableLoaded.next(isTableLoaded);
  }
}
