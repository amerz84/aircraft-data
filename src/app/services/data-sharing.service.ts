import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  chtValuesArray = [];
  egtValuesArray = [];

  //Data from table.component -> header.component
  private isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this.isTableLoaded.asObservable();
  ///////////////////////////////////////////////

  //Data from table.component -> map.component
  positionArray = new BehaviorSubject<any>(null);
  positionArray$ = this.positionArray.asObservable();

  //Min and max values used to set map bounds in map.component
  minLat;
  maxLat;
  minLong;
  maxLong;
  
  toggleIsTableLoaded(isTableLoaded) {
    this.isTableLoaded.next(isTableLoaded);
  }
  ////////////////////////////////////////////////

  //Determine minLat or minLong given latOrLong arg and array of coordinates for setting map bounds/edges
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

  //Determine maxLat or maxLong given latOrLong arg and array of coordinates for setting map bounds/edges
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

  //Determine visual center of flight path for map display
  getCenterCoordinate() {
    return {
      lat: (this.minLat + this.maxLat) / 2.0,
      lng: (this.minLong + this.maxLong) / 2.0
    }
  }

  getPositionArray() {
    return this.positionArray$;
  }

  //data is coming from CHT1-CHT6 range of parsed spreadsheet data (from data-import.service.onFileChange())
  //Ex:
  //  Object { "E1 CHT1": 263.98, "E1 CHT2": 264.12, ...}
  //This JSON array is then passed to setCHTVals() to strip out the values from the key-val pairs
  setCHTData(data: any[]) {
    this.setCHTVals([...data]);
  }

  //data is coming from EGT1-EGT6 range of parsed spreadsheet data (from data-import.service.onFileChange())
  //  Object { "E1 EGT1": 263.98, "E1 EGT2": 264.12, ...}
  //This JSON array is then passed to setEGTVals() to strip out the values from the key-val pairs
  setEGTData(data: any[]) {
    this.setEGTVals([...data]);
  }

  //Convert array of string:number key-value pairs to array of array of values
  //    [ {CHT 1: 100, CHT 2: 200, CHT 3: 300},             [ [100, 101, 102], 
  //      {CHT 1: 101, CHT 2: 201, CHT 3: 301},     -->       [200, 201, 202],
  //      {CHT 1: 102, CHT 2: 202, CHT 3: 302} ]              [300, 301, 302] ] 
  setCHTVals(chtArray : any[]) {
    const cht1ValArray = [];
    const cht2ValArray = [];
    const cht3ValArray = [];
    const cht4ValArray = [];
    const cht5ValArray = [];
    const cht6ValArray = [];

    chtArray.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        if(key.trim() === "E1 CHT1") {
          cht1ValArray.push(value);
        }
        if(key.trim() === "E1 CHT2") {
          cht2ValArray.push(value);
        }  
        if(key.trim() === "E1 CHT3") {
          cht3ValArray.push(value);
        }
        if(key.trim() === "E1 CHT4") {
          cht4ValArray.push(value);
        }   
        if(key.trim() === "E1 CHT5") {
          cht5ValArray.push(value);
        }
        if(key.trim() === "E1 CHT6") {
          cht6ValArray .push(value);
        }     
      };
    });

    this.chtValuesArray.push(cht1ValArray);
    this.chtValuesArray.push(cht2ValArray);
    this.chtValuesArray.push(cht3ValArray);
    this.chtValuesArray.push(cht4ValArray);
    this.chtValuesArray.push(cht5ValArray);
    this.chtValuesArray.push(cht6ValArray);
  }

  //Called by chart.component.ts - returns data source for EGT Line chart
  getCHTVals() {
    return this.chtValuesArray;
  }

  //Convert array of string:number key-value pairs to array of array of values
  //    [ {EGT 1: 100, EGT 2: 200, EGT 3: 300},             [ [100, 101, 102], 
  //      {EGT 1: 101, EGT 2: 201, EGT 3: 301},     -->       [200, 201, 202],
  //      {EGT 1: 102, EGT 2: 202, EGT 3: 302} ]              [300, 301, 302] ] 
  setEGTVals(egtArray: any[]) {
    const egt1ValArray = [];
    const egt2ValArray = [];
    const egt3ValArray = [];
    const egt4ValArray = [];
    const egt5ValArray = [];
    const egt6ValArray = [];

    egtArray.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        if(key.trim() === "E1 EGT1") {
          egt1ValArray.push(value);
        }
        if(key.trim() === "E1 EGT2") {
          egt2ValArray.push(value);
        }  
        if(key.trim() === "E1 EGT3") {
          egt3ValArray.push(value);
        }
        if(key.trim() === "E1 EGT4") {
          egt4ValArray.push(value);
        }   
        if(key.trim() === "E1 EGT5") {
          egt5ValArray.push(value);
        }
        if(key.trim() === "E1 EGT6") {
          egt6ValArray .push(value);
        }     
      };
    });

    this.egtValuesArray.push(egt1ValArray);
    this.egtValuesArray.push(egt2ValArray);
    this.egtValuesArray.push(egt3ValArray);
    this.egtValuesArray.push(egt4ValArray);
    this.egtValuesArray.push(egt5ValArray);
    this.egtValuesArray.push(egt6ValArray);
  }

  //Called by chart.component.ts - returns data source for EGT Line chart
  getEGTVals() {
    return this.egtValuesArray;
  }
}
