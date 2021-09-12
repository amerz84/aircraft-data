import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChartDataService } from './chart-data.service';
import { MapDataService } from './map-data.service';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private _isTableLoaded = new BehaviorSubject(false);
  isTableLoaded$ = this._isTableLoaded.asObservable();

  constructor(private mapDataService: MapDataService, private chartDataService: ChartDataService) {}
  
  toggleIsTableLoaded(isTableLoaded) {
    this._isTableLoaded.next(isTableLoaded);
    this.mapDataService.initMapData();
  }
}
