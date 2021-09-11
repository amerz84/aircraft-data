import { Component, OnInit } from '@angular/core';
import { DataImportService } from 'src/app/services/data-import.service';
import { TableDataService } from '../../services/table-data.service';
import { MapDataService } from './../../services/map-data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isTableLoaded$;
  flightDate$;
  flightDuration$;
  flightDistance$;

  constructor(private tableDataService: TableDataService, private importService: DataImportService,
    private mapDataService: MapDataService) { }

  ngOnInit(): void {
    this.isTableLoaded$ = this.tableDataService.isTableLoaded$;
    this.flightDate$ = this.importService.flightDate$;
    this.flightDistance$ = this.mapDataService.flightDistance$;
    this.flightDuration$ = this.importService.flightDuration$;
  }

}
