import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieDetailViewPage } from '../pages/movie-detail-view/movie-detail-view';
import { TopRatedMoviesPage } from '../pages/top-rated-movies/top-rated-movies';
import { UpCommingMoviesPage } from '../pages/up-comming-movies/up-comming-movies';
import { NowPlayingMoviesPage } from '../pages/now-playing-movies/now-playing-movies';
import { PopularMoviesPage } from '../pages/popular-movies/popular-movies';
import { TopRatedTvShowsPage } from '../pages/top-rated-tv-shows/top-rated-tv-shows';
import { OnAirTvShowsPage } from '../pages/on-air-tv-shows/on-air-tv-shows';
import { PopularTvShowsPage } from '../pages/popular-tv-shows/popular-tv-shows';
import { CastDetailPage } from '../pages/cast-detail/cast-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieProvider } from '../providers/movie/movie';
import { CastsProvider } from '../providers/casts/casts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovieDetailViewPage,
    TopRatedMoviesPage,
    UpCommingMoviesPage,
    NowPlayingMoviesPage,
    PopularMoviesPage,
    TopRatedTvShowsPage,
    OnAirTvShowsPage,
    PopularTvShowsPage,
    CastDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieDetailViewPage,
    TopRatedMoviesPage,
    UpCommingMoviesPage,
    NowPlayingMoviesPage,
    PopularMoviesPage,
    TopRatedTvShowsPage,
    OnAirTvShowsPage,
    PopularTvShowsPage,
    CastDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    CastsProvider,
  ]
})
export class AppModule {}
