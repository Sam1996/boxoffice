import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { MovieDetailViewPage } from '../pages/movie-detail-view/movie-detail-view';
import { TopRatedMoviesPage } from '../pages/top-rated-movies/top-rated-movies';
import { UpCommingMoviesPage } from '../pages/up-comming-movies/up-comming-movies';
import { NowPlayingMoviesPage } from '../pages/now-playing-movies/now-playing-movies';
import { PopularMoviesPage } from '../pages/popular-movies/popular-movies';
import { TopRatedTvShowsPage } from '../pages/top-rated-tv-shows/top-rated-tv-shows';
import { OnAirTvShowsPage } from '../pages/on-air-tv-shows/on-air-tv-shows';
import { PopularTvShowsPage } from '../pages/popular-tv-shows/popular-tv-shows';

export const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'movie-detail-view', component: MovieDetailViewPage },
    { path: 'top-rated-movies', component: TopRatedMoviesPage },
    { path: 'upcomming-movies', component: UpCommingMoviesPage },
    { path: 'nowplaying', component: NowPlayingMoviesPage },
    { path: 'popular-movies', component: PopularMoviesPage },
    { path: 'top-rated-shows', component: TopRatedTvShowsPage },
    { path: 'on-air', component: OnAirTvShowsPage },
    { path: 'popular-shows', component: PopularTvShowsPage }
];

export const routingComponent : ModuleWithProviders = RouterModule.forRoot(routes);