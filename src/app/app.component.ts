import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TopRatedMoviesPage } from '../pages/top-rated-movies/top-rated-movies';
import { UpCommingMoviesPage } from '../pages/up-comming-movies/up-comming-movies';
import { NowPlayingMoviesPage } from '../pages/now-playing-movies/now-playing-movies';
import { PopularMoviesPage } from '../pages/popular-movies/popular-movies';
import { TopRatedTvShowsPage } from '../pages/top-rated-tv-shows/top-rated-tv-shows';
import { OnAirTvShowsPage } from '../pages/on-air-tv-shows/on-air-tv-shows';
import { PopularTvShowsPage } from '../pages/popular-tv-shows/popular-tv-shows';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  moviepages: Array<{title: string, component: any}>;
  tvpages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.moviepages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Top Rated', component: TopRatedMoviesPage },
      { title: 'Upcomming', component: UpCommingMoviesPage },
      { title: 'Now Playing', component: NowPlayingMoviesPage },
      { title: 'Popular', component: PopularMoviesPage }
    ];
    this.tvpages = [
      { title: 'Top Rated', component: TopRatedTvShowsPage },
      { title: 'On Air', component: OnAirTvShowsPage },
      { title: 'Popular', component: PopularTvShowsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
