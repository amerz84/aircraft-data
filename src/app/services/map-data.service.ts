import { DataImportService } from 'src/app/services/data-import.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  latitudeArray: string[];
  longitudeArray: string[];
  private minLat;
  private maxLat;
  private minLong;
  private maxLong;
  flightPath: BehaviorSubject<{ lat: number; lng: number; }[]> = new BehaviorSubject([]);


  constructor(private importService: DataImportService) {}

  //Called by map component to load data on component init
  initMapData() {
    this.latitudeArray = this.getNonEmptyValues(this.importService.latitudeData);
    this.longitudeArray = this.getNonEmptyValues(this.importService.longitudeData);
    this.setMapBoundCoordinates();
    this.convertCoordinateDataType();
  }

  //Returns array of non-empty string values
  getNonEmptyValues(obj: string[]): Array<string> {
    let trimmedArray: Array<string> = [];

    obj.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        if(value.toString().trim() !== "") {
          trimmedArray.push(value);
        }
      }      
    });
    return trimmedArray;
  }

  //Determine center point of map display 
  // by taking AVG(SUM(min value + max value)) for latitude and longitude
  getCenterCoordinate() {
    return {
      lat: (this.minLat + this.maxLat) / 2.0,
      lng: (this.minLong + this.maxLong) / 2.0
    }
  }

  getMinLatitude() {
    return this.minLat;
  }

  getMaxLatitude() {
    return this.maxLat;
  }

  getMinLongitude() {
    return this.minLong;
  }

  getMaxLongitude() {
    return this.maxLong;
  }

  //Determine minLat or minLong given latOrLong arg and array of coordinates for setting map bounds/edges
  setMinCoordinate(coordArray: string[], latOrLong: string) {
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
  setMaxCoordinate(coordArray: string[], latOrLong: string) {
    switch(latOrLong) {
      case 'lat':
        this.maxLat = Math.max.apply(null, coordArray);
        break;
      case 'long':
        this.maxLong = Math.max.apply(null, coordArray);
        break;
    }
  }
  
  //Set four corners of map using the min and max values for lat and long.
  //GoogleMap will automatically add padding to these values
  setMapBoundCoordinates() {
    this.setMinCoordinate(this.latitudeArray, 'lat');
    this.setMinCoordinate(this.longitudeArray, 'long');
    this.setMaxCoordinate(this.latitudeArray, 'lat');
    this.setMaxCoordinate(this.longitudeArray, 'long');
  }

  //Convert coordinate data type from string into float (required for google.maps.polyline)
  convertCoordinateDataType() {
    this.flightPath.next(this.latitudeArray.map((lat, index) => ({lat: parseFloat(lat), lng: parseFloat(this.longitudeArray[index])})));
  }
}
