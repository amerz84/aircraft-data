import { DataImportService } from './data-import.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  chtRawData = [];
  egtRawData = [];
  chtValuesArray = [];
  egtValuesArray = [];

  //Data from table.component -> header.component
  private isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this.isTableLoaded.asObservable();
  ///////////////////////////////////////////////

  constructor(private importService: DataImportService) {}
  
  toggleIsTableLoaded(isTableLoaded) {
    this.isTableLoaded.next(isTableLoaded);
  }

  //Convert array of key-value pairs to array of array of values (populate inner array elements by key)
  //    [ {CHT 1: 100, CHT 2: 200, CHT 3: 300},             [ [100, 101, 102], 
  //      {CHT 1: 101, CHT 2: 201, CHT 3: 301},     -->       [200, 201, 202],
  //      {CHT 1: 102, CHT 2: 202, CHT 3: 302} ]              [300, 301, 302] ] 
  setCHTData() {
    this.chtRawData = [...this.importService.chtData];
    const cht1ValArray = [];
    const cht2ValArray = [];
    const cht3ValArray = [];
    const cht4ValArray = [];
    const cht5ValArray = [];
    const cht6ValArray = [];

    this.chtRawData.forEach(obj => {
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

  //Returns data source for CHT Line chart
  getCHTVals(sampleSize: number) {
    return this.reduceChartDataArraySize(this.chtValuesArray, sampleSize);
  }

  //Convert array of key-value pairs to array of array of values (populate inner array elements by key)
  //    [ {EGT 1: 100, EGT 2: 200, EGT 3: 300},             [ [100, 101, 102], 
  //      {EGT 1: 101, EGT 2: 201, EGT 3: 301},     -->       [200, 201, 202],
  //      {EGT 1: 102, EGT 2: 202, EGT 3: 302} ]              [300, 301, 302] ] 
  setEGTData() {
    this.egtRawData = [...this.importService.egtData];
    const egt1ValArray = [];
    const egt2ValArray = [];
    const egt3ValArray = [];
    const egt4ValArray = [];
    const egt5ValArray = [];
    const egt6ValArray = [];

    this.egtRawData.forEach(obj => {
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

  //Returns data source for EGT Line chart
  getEGTVals(sampleSize: number) {
    return this.reduceChartDataArraySize(this.egtValuesArray, sampleSize);
  }

  //Reduce number of array elements to sampleSize length by taking Nth element 
  // where N = (original array length / sampleSize)
  //Ex) Original array -> 1000 elements
  //    sampleSize     -> 200 elements
  //    resultArray will include originalArray[0], originalArray[5], originalArray[10], etc.
  reduceChartDataArraySize(inputArray: any[], sampleSize: number) {
    let resultArray = new Array(inputArray.length).fill(0).map(() => new Array(sampleSize));

    if (inputArray[0].length < sampleSize) return inputArray;

    //Returned array will skip values from original array based on value of spacing
    const spacing = inputArray[0].length / sampleSize;

    for(let outerElement = 0; outerElement < inputArray.length; outerElement++) {
      let innerElement = -1;
      while(++innerElement < sampleSize) {
        resultArray[outerElement][innerElement] = (inputArray[outerElement][Math.round(innerElement * spacing)]);        
      }
    }

    return resultArray;
  }
}
