import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailViewPage } from './movie-detail-view';

@NgModule({
  declarations: [
    MovieDetailViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailViewPage),
  ],
})
export class MovieDetailViewPageModule {}
