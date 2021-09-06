import { Injectable } from '@angular/core';
import { ArrayUtility } from './../utils/array-utils';
import { DataImportService } from './data-import.service';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  egtAverageArray: number[] = [];
  egtValuesArray: Array<string[]> = [];
  egtAbnormalVals: number[] = [];
  chtAverageArray: number[] = [];
  chtValuesArray: Array<string[]> = [];
  chtAbnormalVals: number[] = [];

  constructor(private importService: DataImportService, private arrayUtils: ArrayUtility) {}

  /**Takes the initial 2D temperature arrays from data-import service and 
   * puts each primary element into a separate array for further processing and later component display. 
   * Also initiates data transformation functions (find averages, abnormal sensor readings, etc.) */
  initChartData() {
    this.setCHTData();
    this.setEGTData();
  }

  //Convert array of key-value pairs to array of array of values (populate inner array elements by key)
  //    [ {CHT 1: 100, CHT 2: 200, CHT 3: 300},             [ [100, 101, 102], 
  //      {CHT 1: 101, CHT 2: 201, CHT 3: 301},     -->       [200, 201, 202],
  //      {CHT 1: 102, CHT 2: 202, CHT 3: 302} ]              [300, 301, 302] ] 
  setCHTData() {
    const chtRawData = [...this.importService.chtData];
    const cht1ValArray: string[] = [];
    const cht2ValArray: string[] = [];
    const cht3ValArray: string[] = [];
    const cht4ValArray: string[] = [];
    const cht5ValArray: string[] = [];
    const cht6ValArray: string[] = [];
    let cht1Sum = 0, cht2Sum = 0, cht3Sum = 0, cht4Sum = 0, cht5Sum = 0, cht6Sum = 0;

    chtRawData.forEach(obj => {
      for (const [key, value] of Object.entries<string>(obj)) {
        if(key.trim() === "CHT (cyl 1)") {
          cht1ValArray.push(value);
          cht1Sum += parseFloat(value);
        }
        if(key.trim() === "CHT (cyl 2)") {
          cht2ValArray.push(value);
          cht2Sum += parseFloat(value);
        }  
        if(key.trim() === "CHT (cyl 3)") {
          cht3ValArray.push(value);
          cht3Sum += parseFloat(value);
        }
        if(key.trim() === "CHT (cyl 4)") {
          cht4ValArray.push(value);
          cht4Sum += parseFloat(value);
        }   
        if(key.trim() === "CHT (cyl 5)") {
          cht5ValArray.push(value);
          cht5Sum += parseFloat(value);
        }
        if(key.trim() === "CHT (cyl 6)") {
          cht6ValArray .push(value);
          cht6Sum += parseFloat(value);
        }     
      };

      this.chtAverageArray = this.getAverageTemperature(cht1Sum, cht2Sum, cht3Sum, cht4Sum, cht5Sum, cht6Sum, cht1ValArray.length);
    });

    this.chtValuesArray.push(cht1ValArray);
    this.chtValuesArray.push(cht2ValArray);
    this.chtValuesArray.push(cht3ValArray);
    this.chtValuesArray.push(cht4ValArray);
    this.chtValuesArray.push(cht5ValArray);
    this.chtValuesArray.push(cht6ValArray);
    this.findAbnormalTemperatures(this.chtValuesArray, "cht");
  }

  /** Convert array of key-value pairs to array of array of values (populate inner array elements by key).
   * 
   * [ {1: 100, 2: 200, 3: 300},     -->     [ [100, 101, 102],
   * 
   *   {1: 101, 2: 201, 3: 301},     -->       [200, 201, 202],
   * 
   *   {1: 102, 2: 202, 3: 302} ]    -->       [300, 301, 302] ] */
  setEGTData() {
    const egtRawData = [...this.importService.egtData];
    const egt1ValArray: string[] = [];
    const egt2ValArray: string[] = [];
    const egt3ValArray: string[] = [];
    const egt4ValArray: string[] = [];
    const egt5ValArray: string[] = [];
    const egt6ValArray: string[] = [];
    let egt1Sum = 0, egt2Sum = 0, egt3Sum = 0, egt4Sum = 0, egt5Sum = 0, egt6Sum = 0;

    egtRawData.forEach(obj => {
      for (const [key, value] of Object.entries<string>(obj)) {
        if(key.trim() === "EGT (cyl 1)") {
          egt1ValArray.push(value);
          egt1Sum += parseFloat(value);
        }
        if(key.trim() === "EGT (cyl 2)") {
          egt2ValArray.push(value);
          egt2Sum += parseFloat(value);
        }  
        if(key.trim() === "EGT (cyl 3)") {
          egt3ValArray.push(value);
          egt3Sum += parseFloat(value);
        }
        if(key.trim() === "EGT (cyl 4)") {
          egt4ValArray.push(value);
          egt4Sum += parseFloat(value);
        }   
        if(key.trim() === "EGT (cyl 5)") {
          egt5ValArray.push(value);
          egt5Sum += parseFloat(value);
        }
        if(key.trim() === "EGT (cyl 6)") {
          egt6ValArray .push(value);
          egt6Sum += parseFloat(value);
        }     
      };

      this.egtAverageArray = this.getAverageTemperature(egt1Sum, egt2Sum, egt3Sum, egt4Sum, egt5Sum, egt6Sum, egt1ValArray.length);
    });

    this.egtValuesArray.push(egt1ValArray);
    this.egtValuesArray.push(egt2ValArray);
    this.egtValuesArray.push(egt3ValArray);
    this.egtValuesArray.push(egt4ValArray);
    this.egtValuesArray.push(egt5ValArray);
    this.egtValuesArray.push(egt6ValArray);
    this.findAbnormalTemperatures(this.egtValuesArray, "egt");
  }
  

  /**
   * @param sampleSize 
   * @returns 2D data source for CHT Line chart.
   */
  getCHTVals(sampleSize: number) {
    return this.reduceChartDataArraySize(this.chtValuesArray, sampleSize);
  }

  /**
   * @param sampleSize 
   * @returns 2D data source for EGT Line chart.
   */
  getEGTVals(sampleSize: number) {
    return this.reduceChartDataArraySize(this.egtValuesArray, sampleSize);
  }

  /** 
   * @returns New array of sampleSize length by taking Nth element of input array, 
   * where N = (input array length / sampleSize).
   * 
   * Ex) input array -> 1000 elements, sampleSize -> 200 elements
   * 
   * resultArray = [inputArray[0], inputArray[5], inputArray[10], ..., inputArray[995]]. */
  reduceChartDataArraySize(inputArray: Array<string[]>, sampleSize: number) {
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

  /**
   * @returns 1D array of CHT/EGT averages for each sensor/probe in set.
   */
  getAverageTemperature(sensorOneSum, sensorTwoSum, sensorThreeSum, sensorFourSum, sensorFiveSum, sensorSixSum, numRows): number[] {
    return [sensorOneSum / numRows, 
            sensorTwoSum / numRows, 
            sensorThreeSum / numRows,
            sensorFourSum / numRows,
            sensorFiveSum / numRows,
            sensorSixSum / numRows];
  }

  /**Call on array-utils.ts getAbnormalValues() to determine if there are any 
   * high or low (compared to moving average) values in CHT/EGT sensor data and store in member array
   * for use in chart component.   */
  findAbnormalTemperatures(sensorArray: Array<string[]>, source: string): void {
    for (let i = 0; i < sensorArray.length; i++) {
      if (source.toLowerCase() === "cht") {
        this.chtAbnormalVals.push(this.arrayUtils.getAbnormalValues(sensorArray[i]));
      }
      else if (source.toLowerCase() === "egt") {
        this.egtAbnormalVals.push(this.arrayUtils.getAbnormalValues(sensorArray[i]));
      }
    }
  }

  /**
   * @returns 1D array of count of high/low values for each sensor in CHT/EGT set.
   */
  getAbnormalTemperatures(source: string): number[] {
    if (source.toLowerCase() === "cht") {
      return this.chtAbnormalVals;
    }
    else if (source.toLowerCase() === "egt") {
      return this.egtAbnormalVals;
    }
  }
}

