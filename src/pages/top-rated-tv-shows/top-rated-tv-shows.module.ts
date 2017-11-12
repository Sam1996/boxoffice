import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopRatedTvShowsPage } from './top-rated-tv-shows';

@NgModule({
  declarations: [
    TopRatedTvShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopRatedTvShowsPage),
  ],
})
export class TopRatedTvShowsPageModule {}
