import { Component, OnInit } from '@angular/core';

import { DataSharingService } from './../../services/data-sharing.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isTableLoaded: boolean;

  constructor(private sharingService: DataSharingService) { }

  ngOnInit(): void {
    this.sharingService.isTableLoaded.subscribe(res => {
      this.isTableLoaded = res;
    });
  }

}
