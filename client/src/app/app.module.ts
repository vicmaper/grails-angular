import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
//import { NavComponent } from './nav/nav.component';
//import { NavService } from './nav/nav.service';
import { catchError } from 'rxjs/operators/catchError';
import { _throw } from 'rxjs/observable/throw';
import { HttpClientModule, HttpErrorResponse  } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnosCreateComponent } from './alumnos-create/alumnos-create.component';
import { AlumnosDetailsComponent } from './alumnos-details/alumnos-details.component';
import { AlumnosEditComponent } from './alumnos-edit/alumnos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
  //  NavComponent,
    IndexComponent,
    AlumnosComponent,
    AlumnosCreateComponent,
    AlumnosDetailsComponent,
    AlumnosEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
