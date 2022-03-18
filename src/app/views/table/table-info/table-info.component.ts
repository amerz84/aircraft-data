import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataImportService } from '../../../services/data-import.service';
import { TableInfoDialog } from './table-info-dialog/table-info-dialog.component';


@Component({
  selector: 'table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent {
  logVersion: string;
  airframeName: string;
  unitSoftwarePN: string;
  unitSoftwareVer: string;
  sysSoftwarePN: string;
  sysID: string;
  mode: string;

  @Input('isTableLoaded') isTableLoaded: boolean;
  constructor(public dialog: MatDialog, private uploadService: DataImportService) {
  }

  //////////////////////////////////////////////
  openDialog() {
    if (this.isTableLoaded === true) {
      const dialogConfig = new MatDialogConfig();

      //Set data property to include formatted first row data
      //Needs to be injected into the MatDialogRef class below
      dialogConfig.data = {
          logVersion: this.getFormattedFirstRowData(0),
          airframeName: this.getFormattedFirstRowData(1),
          unitSoftwarePN: this.getFormattedFirstRowData(2),
          unitSoftwareVer: this.getFormattedFirstRowData(3),
          sysSoftwarePN: this.getFormattedFirstRowData(4),
          sysID: this.getFormattedFirstRowData(5),
          mode: this.getFormattedFirstRowData(6)
        }
        this.dialog.open(TableInfoDialog, dialogConfig);
      } //End if
    else console.error("Table data not loaded - please upload file first.");
  }

  //////////////////////////////////////////////
  //Return formatted values for "aircraft info" (e.g. values for software version, system ID, etc.)
  getFormattedFirstRowData(index: number) {
    return this.uploadService.getFormattedAircraftInfo(index);
  }
}
