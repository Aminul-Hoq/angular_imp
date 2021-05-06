import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {CalendarComponent} from './calendar/calendar.component';
import {HomeComponent} from './home/home.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {PlayerComponent} from './player/player.component';
import {WorkComponent} from './work/work.component';


const routes: Routes = [
  {
    path: 'file',
    component: FileUploadComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'gallery'
  // },
  // {
  //   path: '',
  //   redirectTo: '/home'
  // },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'works',
    component: WorkComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
