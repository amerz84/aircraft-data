import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataImportService } from 'src/app/services/data-import.service';
import { ArrayUtility } from './../utils/array-utils';

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

  constructor(private importService: DataImportService, private arrayUtility: ArrayUtility) {}

  /** Gets lat/long and other coordinate data from the import service. */
  initMapData() {
    this.latitudeArray = this.arrayUtility.getNonEmptyValues(this.importService.latitudeData);
    this.longitudeArray = this.arrayUtility.getNonEmptyValues(this.importService.longitudeData);
    this.setMapBoundCoordinates();
    this.convertCoordinateDataType();
  }

  /** Determine center point of map display by taking AVG(SUM(min value + max value)) for latitude and longitude. */
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

  /** Determine minimum value of coordinate array and set value of class member minLat or minLong depending on latOrLong arg.
   * 
   * Used for setting embedded Google map bounds/edges. */
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

  /** Determine maximum value of coordinate array and set value of class member maxLat or maxLong depending on latOrLong arg.
   * 
   * Used for setting embedded Google map bounds/edges. */
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
  
  /** Set four corners of map using the min and max values for lat and long.
   * 
  NOTE: GoogleMap will automatically add padding to these values. */
  setMapBoundCoordinates() {
    this.setMinCoordinate(this.latitudeArray, 'lat');
    this.setMinCoordinate(this.longitudeArray, 'long');
    this.setMaxCoordinate(this.latitudeArray, 'lat');
    this.setMaxCoordinate(this.longitudeArray, 'long');
  }

  /** Convert coordinate data type from string into float (required for google.maps.polyline). */
  convertCoordinateDataType() {
    this.flightPath.next(this.latitudeArray.map((lat, index) => ({lat: parseFloat(lat), lng: parseFloat(this.longitudeArray[index])})));
  }
}
