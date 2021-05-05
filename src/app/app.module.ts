import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { headers } from './shared/header-names';
import { DataDialogComponent, DataDialogDialog } from './data-dialog/data-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataDialogComponent,
    DataDialogDialog
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: 'HEADERS', useValue:headers}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
