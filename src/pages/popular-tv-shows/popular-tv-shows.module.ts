import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularTvShowsPage } from './popular-tv-shows';

@NgModule({
  declarations: [
    PopularTvShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularTvShowsPage),
  ],
})
export class PopularTvShowsPageModule {}
