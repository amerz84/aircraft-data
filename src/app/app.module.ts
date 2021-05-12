import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { TableUploadComponent } from './table-upload/table-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { headersAll } from './shared/column-arrays';
import { InfoDialogComponent, InfoDialogDialog } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableUploadComponent,
    InfoDialogComponent,
    InfoDialogDialog
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: 'HEADERS', useValue:headersAll}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
