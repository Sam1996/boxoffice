import { Component } from '@angular/core';
import { IonicPage, LoadingController , NavController, NavParams } from 'ionic-angular';
import { CastsProvider } from '../../providers/casts/casts';


/**
 * Generated class for the CastDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cast-detail',
  templateUrl: 'cast-detail.html',
})
export class CastDetailPage {
  public castID : String;
  public cast : Array<any> = [];
  public loader:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public castProvider: CastsProvider,
              public loading:LoadingController) {

    this.castID = navParams.get("cast_id");
    this.loader = loading.create({
      spinner : "dots",
      content : "Loading..."
    });
    this.loader.present();
    console.log(this.castID);

  }

  ionViewDidLoad() {
    this.castProvider.getCasts(this.castID)
                     .subscribe(res=>{
                       this.cast = res,
                       console.log(this.cast);
                       this.dismissLoader();
                      });
  }

  public dismissLoader(){
    return this.loader.dismiss();
  }
}
