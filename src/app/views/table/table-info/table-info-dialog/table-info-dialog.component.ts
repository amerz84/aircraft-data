import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'table-info-dialog',
  templateUrl: 'table-info-dialog.html',
  styleUrls: ['./table-info-dialog.component.css']
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
