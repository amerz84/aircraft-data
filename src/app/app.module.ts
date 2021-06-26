import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { headersAll } from './shared/column-arrays';
import { ChartComponent } from './views/chart/chart.component';
import { MapComponent } from './views/map/map.component';
import { TableInfoComponent, TableInfoDialog } from './views/table/table-info/table-info.component';
import { TableComponent } from './views/table/table.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableInfoComponent,
    TableInfoDialog,
    MapComponent,
    ChartComponent,
    HeaderComponent,
    NotFoundComponent
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
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: TableComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'map', component: MapComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: 'HEADERS', useValue:headersAll}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
