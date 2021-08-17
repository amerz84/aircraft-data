import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import {} from 'googlemaps'; //Typescript typings for maps added manually (see also index.d.ts in /src)
import { BehaviorSubject } from 'rxjs';
import { DataImportService } from 'src/app/services/data-import.service';

@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(GoogleMap) map!: GoogleMap;
  flightPath: google.maps.LatLngLiteral[];
  bounds: google.maps.LatLngBounds;
  minBound: google.maps.LatLng;
  maxBound: google.maps.LatLng;
  center: google.maps.LatLngLiteral;

  positionArray = new BehaviorSubject<any>(null);
  positionArray$ = this.positionArray.asObservable();
  zoom = 6;
  display;

  constructor(private importService: DataImportService, private router: Router) {
    this.center = this.importService.getCenterCoordinate();
    this.minBound = new google.maps.LatLng(this.importService.getMinLatitude(), this.importService.getMinLongitude());
    this.maxBound = new google.maps.LatLng(this.importService.getMaxLatitude(), this.importService.getMaxLongitude());
    this.setFlightPath();
  } 

  ngAfterViewInit(){
    const bounds = this.getBounds();
    this.map.googleMap.fitBounds(bounds);     
  }

  //Set the initial scale of the map based on the min and max lat and long values
  getBounds(){
    let north;
    let south;
    let east;
    let west; 

    north = north !== undefined ? Math.max(north, this.importService.getMaxLatitude()) : this.importService.getMaxLatitude();
    south = south !== undefined ? Math.min(south, this.importService.getMinLatitude()) : this.importService.getMinLatitude();
    east = east !== undefined ? Math.max(east, this.importService.getMaxLongitude()) : this.importService.getMaxLongitude();
    west = west !== undefined ? Math.min(west, this.importService.getMinLongitude()) : this.importService.getMinLongitude();
    
    const bounds = { north, south, east, west };
    return bounds;
  }
  
  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }

  //Set array of latitude and longitude data {lat: number, lng: number}
  //to map polyline data source
  setFlightPath() {
    this.importService.getPositionArray().subscribe(res => {
      this.flightPath = res;
    });
  }  

}
