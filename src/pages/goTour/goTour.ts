import { Component } from '@angular/core';
import {TourService} from '../../service/tourService';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';

@Component({
  selector: 'page-home',
  templateUrl: 'goTour.html',  
  providers: [TourService]
})
export class GoTourPage {
  data : any; 
  
  countryData : any; 
  cityData : any;

  constructor(public navCtrl: NavController, 
    private service: TourService, private loader: LoadingController,
    private alertCtrl: AlertController, private geofence: Geofence) {

    let loadingUI = this.loader.create({ content: 'Starting tour ...' });

    geofence.initialize().then(
      
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )

    //loadingUI.present();
    //this.service.getFeed().then(data => {
    //  this.data = data.feed;
        //loadingUI.dismiss();
    //});
    }
 

  loadTour(evt)
  {
   
    this.navCtrl.push('');
    
    // let alert = this.alertCtrl.create({
    //   title: 'Low battery',
    //   subTitle: '10% of battery remaining',
    //   buttons: ['Dismiss']
    // });
    // alert.present();
  }
}
