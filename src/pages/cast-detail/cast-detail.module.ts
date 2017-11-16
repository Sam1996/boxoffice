import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CastDetailPage } from './cast-detail';

@NgModule({
  declarations: [
    CastDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CastDetailPage),
  ],
})
export class CastDetailPageModule {}
