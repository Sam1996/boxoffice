import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movieID = navParams.get("movieID");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailViewPage');
    console.log(this.movieID);
  }

}
