import { Component } from '@angular/core';
import { IonicPage, LoadingController , NavController, NavParams } from 'ionic-angular';
import { MovieProvider} from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail-view',
  templateUrl: 'movie-detail-view.html',
})
export class MovieDetailViewPage {
  movieID : any;
  movie : any[] = [];
  loader :any; 
  ErrOccured : Boolean;
  BannerImg : String = "";
  PosterImg : String = "";
  intRating : any;
  decimalRating : any;
  noRating : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieProvider : MovieProvider,
              public loading : LoadingController ) {
    this.movieID = navParams.get("movieID");
    this.loader = loading.create({content : "Loading..."});
    this.ErrOccured = false;
  }

  ionViewDidLoad() {
    this.loader.present();
    this.movieProvider
        .getMovieDetail(this.movieID)
        .subscribe(res => {
          if(res.err){
            this.ErrOccured = true;
            let ErrMessage : String = "Error occured! Please try again"
          }else{
            this.loader.dismiss(),
            this.movie = res,
            this.BannerImg = "http://image.tmdb.org/t/p/original"+res[0].data[0].backdrop_path,
            this.PosterImg = "http://image.tmdb.org/t/p/w185"+res[0].data[0].poster_path,
            this.intRating = Array(splitRatingToInt(this.movie[0].data[0].vote_average)).fill(1);
            this.decimalRating = Array(splitRatingToDecimal(this.movie[0].data[0].vote_average)).fill(1);
            this.noRating = Array(splitRatingToNill(this.movie[0].data[0].vote_average)).fill(1);
          }
        });   
    function splitRatingToInt(n){ 
      var integerValue = Number(String(n).split('.')[0]);
      integerValue = (integerValue >= 5) ? integerValue/2 : integerValue;
      integerValue = Number(String(integerValue).split('.')[0]);
      console.log("int :"+integerValue);
      return integerValue;
    }
    function splitRatingToDecimal(n){ 
      var decimalValue = Math.ceil(Number(String(n).split('.')[1] || 0)/10);
      console.log("Decimal :"+decimalValue);
      return decimalValue;
    }
    function splitRatingToNill(n){ 
      var noRatting = Math.ceil((splitRatingToInt(n) < 5) ? 5-(splitRatingToInt(n)+splitRatingToDecimal(n)) : (splitRatingToInt(n)+splitRatingToDecimal(n))-5);
      console.log("nil :"+noRatting);
      return noRatting;
    }
     
  }

}
