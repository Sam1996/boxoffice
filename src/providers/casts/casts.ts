import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

/*
  Generated class for the CastsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CastsProvider {

  constructor(public http: Http) {
    
  }


  getCastsForMovie(movieID){
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieID+'/casts?api_key=159c35e305c23d2bf19a0d05bb69e190')
    .map(this.handleData)
		.catch(this.handleError)
  }

	getCasts(castID){
		return this.http.get('https://api.themoviedb.org/3/person/'+castID+'?api_key=159c35e305c23d2bf19a0d05bb69e190')
										.map(res=>res.json())
	}

	public handleData(res:Response){
		let data = res.json();
		data = data.cast;
		data = data.slice(0,10);
		return data;
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
