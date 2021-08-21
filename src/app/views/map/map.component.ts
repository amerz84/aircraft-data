import { MapDataService } from './../../services/map-data.service';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import {} from 'googlemaps'; //Typescript typings for maps added manually (see also index.d.ts in /src)


@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(GoogleMap) map!: GoogleMap;
  flightPath$: any;
  //bounds: google.maps.LatLngBounds;
  minBound: google.maps.LatLng;
  maxBound: google.maps.LatLng;
  center: google.maps.LatLngLiteral;

  zoom = 6;

  constructor(private mapDataService: MapDataService) {} 

  ngOnInit() {
    this.mapDataService.initMapData();
    this.center = this.mapDataService.getCenterCoordinate();
    this.minBound = new google.maps.LatLng(this.mapDataService.getMinLatitude(), this.mapDataService.getMinLongitude());
    this.maxBound = new google.maps.LatLng(this.mapDataService.getMaxLatitude(), this.mapDataService.getMaxLongitude());
    this.setFlightPath();
  }

  ngAfterViewInit(){
    this.map.googleMap.fitBounds(this.getBounds());     
  }

  //Set the initial scale of the map based on the min and max lat and long values
  getBounds(){
    let north: number, south: number, east: number, west: number;

    north = north !== undefined ? Math.max(north, this.mapDataService.getMaxLatitude()) : this.mapDataService.getMaxLatitude();
    south = south !== undefined ? Math.min(south, this.mapDataService.getMinLatitude()) : this.mapDataService.getMinLatitude();
    east = east !== undefined ? Math.max(east, this.mapDataService.getMaxLongitude()) : this.mapDataService.getMaxLongitude();
    west = west !== undefined ? Math.min(west, this.mapDataService.getMinLongitude()) : this.mapDataService.getMinLongitude();
    
    const bounds = { north, south, east, west };
    return bounds;
  }
  
  ////////////////////////////////////////////
  // Map interaction functions
  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }
  ////////////////////////////////////////////

  //Set array of latitude and longitude data {lat: number, lng: number}
  //to map polyline data source
  setFlightPath() {
    this.flightPath$ = this.mapDataService.flightPath.asObservable();
  }  

}
