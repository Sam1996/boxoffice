import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

	private headers: Headers
  	constructor(public http: Http) {
					  this.headers = new Headers(),
					  this.headers.append('Content-Type', 'application/json')
				  }

  	getMovies(){
  		return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=159c35e305c23d2bf19a0d05bb69e190&language=en-US')
  		.map(res => res.json())
  	}
	
	getMovieDetail(movieID){
		return this.http.get('https://api.themoviedb.org/3/movie/'+movieID+'?api_key=159c35e305c23d2bf19a0d05bb69e190')
		.map(this.handleData)
		.catch(this.handleError)
	}

	public handleData(res : Response){
		let data = res.json();
		let body = [{
			status : res.status,
			err : false,
			data : [data]
		}]
		return body;
	}
	public handleError(err : any){
		if(err){
			let data = [{
				status : err.status,
				err : true,
				data : err.message
			}]
			return Observable.throw(data);
		}
	}
}
