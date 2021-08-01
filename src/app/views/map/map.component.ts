import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import {} from 'googlemaps'; //Typescript typings for maps added manually (see also index.d.ts in /src)

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
  zoom = 6;
  display;

  constructor(private sharingService: DataSharingService, private router: Router) {
    this.center = this.sharingService.getCenterCoordinate();
    this.minBound = new google.maps.LatLng(this.sharingService.minLat, this.sharingService.minLong);
    this.maxBound = new google.maps.LatLng(this.sharingService.maxLat, this.sharingService.maxLong);
    this.setFlightPath();
  } 

  ngAfterViewInit(){
    const bounds = this.getBounds();
    this.map.googleMap.fitBounds(bounds);     
  }

  getBounds(){
    let north;
    let south;
    let east;
    let west; 

    // set the coordinates to marker's lat and lng on the first run.
    // if the coordinates exist, get max or min depends on the coordinates.
    north = north !== undefined ? Math.max(north, this.sharingService.maxLat) : this.sharingService.maxLat;
    south = south !== undefined ? Math.min(south, this.sharingService.minLat) : this.sharingService.minLat;
    east = east !== undefined ? Math.max(east, this.sharingService.maxLong) : this.sharingService.maxLong;
    west = west !== undefined ? Math.min(west, this.sharingService.minLong) : this.sharingService.minLong;
    
    const bounds = { north, south, east, west };
    return bounds;
  }
  

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }

  setFlightPath() {
    this.sharingService.getPositionArray().subscribe(res => {
      this.flightPath = res;
    });
  }
  

}
