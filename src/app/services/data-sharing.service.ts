import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  //Store table data in service
  tableData = new BehaviorSubject<any>(null);
  tableData$ = this.tableData.asObservable();

  //Data from table -> header component
  private isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this.isTableLoaded.asObservable();

  //Data from table -> map component
  positionArray = new BehaviorSubject<any>(null);
  positionArray$ = this.positionArray.asObservable();

  toggleIsTableLoaded(isTableLoaded) {
    this.isTableLoaded.next(isTableLoaded);
  }

}
