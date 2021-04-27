import { DataService } from './../data.service';
import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent {
  logVersion: string;
  airframeName: string;
  unitSoftwarePN: string;
  unitSoftwareVer: string;
  sysSoftwarePN: string;
  sysID: string;
  mode: string;

  @Input('isTableLoaded') isTableLoaded: boolean;
  constructor(public dialog: MatDialog, private uploadService: DataService) {
   }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
        logVersion: this.getHeaderValues(0),
        airframeName: this.getHeaderValues(1),
        unitSoftwarePN: this.getHeaderValues(2),
        unitSoftwareVer: this.getHeaderValues(3),
        sysSoftwarePN: this.getHeaderValues(4),
        sysID: this.getHeaderValues(5),
        mode: this.getHeaderValues(6)
      }
      this.dialog.open(DataDialogDialog, dialogConfig);
  }
  getHeaderValues(index: number) {
    return this.uploadService.getFormattedHeaderData(index);
  }
}

@Component({
  selector: 'data-dialog-dialog',
  templateUrl: 'data-dialog-dialog.html',
})
export class DataDialogDialog {
  logVersion: string;
  airframeName: string;
  sysSoftwarePN: string;
  unitSoftwarePN: string;
  mode: string;
  unitSoftwareVer: string;
  sysID: string;

  constructor(
    private dialogRef: MatDialogRef<DataDialogDialog>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.logVersion = data.logVersion;
      this.airframeName = data.airframeName;
      this.sysSoftwarePN = data.sysSoftwarePN;
      this.unitSoftwarePN = data.unitSoftwarePN;
      this.mode = data.mode;
      this.unitSoftwareVer = data.unitSoftwareVer;
      this.sysID = data.sysID;    
  }

  close() {
    this.dialogRef.close();
  }
}
