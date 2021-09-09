import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isTableLoaded;

  constructor(private tableDataService: TableDataService) { }

  ngOnInit(): void {
    this.isTableLoaded = this.tableDataService.isTableLoaded$;
  }

}
