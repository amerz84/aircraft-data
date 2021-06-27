import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display;

  constructor() {
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }

  ngOnInit(): void {

  }

}
