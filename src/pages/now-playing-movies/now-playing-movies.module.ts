import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NowPlayingMoviesPage } from './now-playing-movies';

@NgModule({
  declarations: [
    NowPlayingMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(NowPlayingMoviesPage),
  ],
})
export class NowPlayingMoviesPageModule {}
