import { Component, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { } from 'googlemaps'; //Typescript typings for maps added manually (see also index.d.ts in /src)
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Airport } from './../../models/airport';
import { MapDataService } from './../../services/map-data.service';

@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) mapInfo: MapInfoWindow
  flightPath$: Observable<{lat: number, lng: number}[]>;
  minBound: google.maps.LatLng;
  maxBound: google.maps.LatLng;
  center: google.maps.LatLngLiteral;
  startCoord: google.maps.LatLngLiteral = { lat: 0, lng: 0};
  mapInfoContent = { title: "", coord: ""};
  isApiLoaded$: Observable<boolean>;
  code: AngularFireList<Airport>;
  zoom = 6;
  display: google.maps.LatLngLiteral;

  constructor(private mapDataService: MapDataService, private db: AngularFireDatabase) {} 

  ngOnInit() {
    this.code = this.db.list('/airports/usa/', ref => ref.orderByChild('code').equalTo('ktys'));
    this.code.snapshotChanges().pipe(map(entry => {
      return entry.map(val => ({key: val.payload.key, ...(val as any).payload.val() }));
    })).subscribe(data => console.log(data));
    this.mapDataService.initMapData();
    this.center = this.mapDataService.getCenterCoordinate();
    this.minBound = new google.maps.LatLng(this.mapDataService.getMinLatitude(), this.mapDataService.getMinLongitude());
    this.maxBound = new google.maps.LatLng(this.mapDataService.getMaxLatitude(), this.mapDataService.getMaxLongitude());
    this.mapDataService.convertToLatLng();
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

    //Get first coordinate pair for start position marker
    this.flightPath$.pipe(first()).subscribe(res => {
      this.startCoord.lat = res[0].lat;
      this.startCoord.lng = res[0].lng;
    });
  } 

  openMapInfo(marker: MapMarker) {
    this.mapInfoContent = {
      title: "Starting Point",
      coord: this.startCoord.lat + " ," + this.startCoord.lng
    };
    this.mapInfo.open(marker);
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
