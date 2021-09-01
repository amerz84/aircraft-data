import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataImportService } from '../../../services/data-import.service';


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
    else console.log("Table data not loaded - please upload file first.");
  }

  //////////////////////////////////////////////
  //Return formatted values for "aircraft info" (e.g. values for software version, system ID, etc.)
  getFormattedFirstRowData(index: number) {
    return this.uploadService.getFormattedAircraftInfo(index);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'table-info-dialog',
  templateUrl: 'table-info-dialog.html',
})
export class TableInfoDialog {
  logVersion: string;
  airframeName: string;
  sysSoftwarePN: string;
  unitSoftwarePN: string;
  mode: string;
  unitSoftwareVer: string;
  sysID: string;

  //Bind the formatted first row data
  constructor(
    private dialogRef: MatDialogRef<TableInfoDialog>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.logVersion = data.logVersion;
      this.airframeName = data.airframeName;
      this.sysSoftwarePN = data.sysSoftwarePN;
      this.unitSoftwarePN = data.unitSoftwarePN;
      this.mode = data.mode;
      this.unitSoftwareVer = data.unitSoftwareVer;
      this.sysID = data.sysID;    
  }

  //////////////////////////////////////////////
  // Close dialog button
  close() {
    this.dialogRef.close();
  }
}
