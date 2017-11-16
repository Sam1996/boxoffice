import { Component } from '@angular/core';
import { IonicPage, LoadingController , NavController, NavParams } from 'ionic-angular';
import { MovieProvider} from '../../providers/movie/movie';
import { CastsProvider } from '../../providers/casts/casts';
import { CastDetailPage } from '../cast-detail/cast-detail';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
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
  casts : any;
  castSectionTitle : String;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieProvider : MovieProvider,
              public loading : LoadingController,
              public castsProvider : CastsProvider ) {
    this.movieID = navParams.get("movieID");
    this.loader = loading.create({content : "Loading..."});
    this.ErrOccured = false;
  }


  getIndivudualCast(cast_id){
     this.navCtrl.push(CastDetailPage,{
       cast_id : cast_id
     })
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
            this.movie = res,
            this.BannerImg = "http://image.tmdb.org/t/p/original"+res[0].data[0].backdrop_path,
            this.PosterImg = "http://image.tmdb.org/t/p/w185"+res[0].data[0].poster_path,
            this.intRating = Array(splitRatingToInt(this.movie[0].data[0].vote_average)).fill(1);
            this.decimalRating = Array(splitRatingToDecimal(this.movie[0].data[0].vote_average)).fill(1);
            this.noRating = Array(splitRatingToNill(this.movie[0].data[0].vote_average)).fill(1);
          }
        }); 
    this.castsProvider
        .getCastsForMovie(this.movieID)
        .switchMap((casts)=>{
          let castsArray : Observable<any>[] = [];
          for(let c of casts){
            let character : String = c.character;
            castsArray.push(this.castsProvider.getCasts(c.id)
                                              .map(data=>({character,data})))
          }
          return Observable.forkJoin(castsArray);
        })
        .subscribe(res => {
          this.casts = res,
          this.castSectionTitle = "Casts";
          this.loader.dismiss(),
          console.log(this.casts);
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
    function getMainCasts(data){
      var castList = [];
      castList = data.sort(function(a, b) {
          return parseFloat(a.cast_id) - parseFloat(b.cast_id);
      });
      return castList.slice(0,10);
    }
     
  }

  

}
