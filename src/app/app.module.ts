import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InterceptorService} from './shared/loader/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { CalendarComponent } from './calendar/calendar.component';

/** For angular calender */
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkComponent } from './work/work.component';
import { CalculatorComponent } from './calculator/calculator.component';


import { PlayerComponent } from './player/player.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogContentExampleDialog} from './shared/DialogContentExampleDialog';
import { PhoneInputComponent } from './shared/phone-input/phone-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    GalleryComponent,
    CalendarComponent,
    HomeComponent,
    NavigationComponent,
    WorkComponent,
    CalculatorComponent,
    PlayerComponent,
    DialogContentExampleDialog,
    PhoneInputComponent
  ],
  imports: [
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDialogModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
