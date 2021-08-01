import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  //Store table data in service
/*   tableData = new BehaviorSubject<any>(null);
  tableData$ = this.tableData.asObservable(); */

  //Data from table -> header component
  private isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this.isTableLoaded.asObservable();

  //Data from table -> map component
  positionArray = new BehaviorSubject<any>(null);
  positionArray$ = this.positionArray.asObservable();
  minLat;
  maxLat;
  minLong;
  maxLong;
  
  toggleIsTableLoaded(isTableLoaded) {
    this.isTableLoaded.next(isTableLoaded);
  }

  setMinCoordinate(coordArray: any[], latOrLong: string) {
    switch(latOrLong) {
      case 'lat':
        this.minLat = Math.min.apply(null, coordArray);
        break;
      case 'long':
        this.minLong = Math.min.apply(null, coordArray);
        break;
    }
  }

  setMaxCoordinate(coordArray: any[], latOrLong: string) {
    switch(latOrLong) {
      case 'lat':
        this.maxLat = Math.max.apply(null, coordArray);
        break;
      case 'long':
        this.maxLong = Math.max.apply(null, coordArray);
        break;
    }
  }

  getCenterCoordinate() {
    return {
      lat: (this.minLat + this.maxLat) / 2.0,
      lng: (this.minLong + this.maxLong) / 2.0
    }
  }

  getPositionArray() {
    return this.positionArray$;
  }
}
