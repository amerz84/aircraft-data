import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { CustomReuseStrategy } from './reuse-strategy';
import { DataImportService } from './services/data-import.service';
import { ArrayUtility } from './utils/array-utils';
import { headersAll } from './utils/column-arrays';
import { DateTimeUtility } from './utils/datetime-utils';
import { ChartHelperService } from './views/chart/chart-helper-service';
import { ChartComponent } from './views/chart/chart.component';
import { MapComponent } from './views/map/map.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TableInfoDialog } from './views/table/table-info/table-info-dialog/table-info-dialog.component';
import { TableInfoComponent } from './views/table/table-info/table-info.component';
import { TableComponent } from './views/table/table.component';
import { MeterToMilePipe } from './pipes/meter-to-mile.pipe';
import { FullTimeFormatterPipe } from './pipes/full-time-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableInfoComponent,
    TableInfoDialog,
    MapComponent,
    ChartComponent,
    HeaderComponent,
    NotFoundComponent,
    MeterToMilePipe,
    FullTimeFormatterPipe,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/table', pathMatch: 'full' },
      { path: 'table', component: TableComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'map', component: MapComponent, },
      { path: '**', component: NotFoundComponent }
    ], {onSameUrlNavigation: "reload"}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: 'HEADERS', useValue:headersAll},
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
    DataImportService,
    DateTimeUtility,
    ArrayUtility,
    ChartHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
