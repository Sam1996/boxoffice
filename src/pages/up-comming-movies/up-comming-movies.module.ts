import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpCommingMoviesPage } from './up-comming-movies';

@NgModule({
  declarations: [
    UpCommingMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpCommingMoviesPage),
  ],
})
export class UpCommingMoviesPageModule {}
