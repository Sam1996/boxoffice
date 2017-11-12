import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { MovieProvider} from '../../providers/movie/movie';
import { MovieDetailViewPage} from '../movie-detail-view/movie-detail-view';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[MovieProvider]
})
export class HomePage {

  movies : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public http: Http, 
              private movieProvider : MovieProvider) { 
      
      movieProvider.getMovies()
      .subscribe(res => {
        this.movies = res.results
        console.log(this.movies);
      })
  }

      navigate(page,movie){
        this.navCtrl.push(MovieDetailViewPage,{
          movieID : movie.id
        })
      }
}
