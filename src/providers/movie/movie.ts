import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  	constructor(public http: Http) {}

  	getMovies(){
  		return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=159c35e305c23d2bf19a0d05bb69e190&language=en-US')
  		.map(res => res.json())
  	}
}
