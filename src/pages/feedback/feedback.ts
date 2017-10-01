import { Component } from '@angular/core';
import {TourService} from '../../service/tourService';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TourPage } from '../../pages/tours/tour';

@Component({
  selector: 'page-home',
  templateUrl: 'feedback.html', 
  providers: [TourService]
})

export class FeedbackPage {
  data : any;   
  countryData : any; 
  cityData : any;
  
  constructor(public navCtrl: NavController, 
    private service: TourService, private loader: LoadingController,
    private alertCtrl: AlertController) {
      
      let loadingUI = this.loader.create({ content: 'Starting tour ...' });
      //loadingUI.present();
      //this.service.getFeed().then(data => {
      //  this.data = data.feed;
      //loadingUI.dismiss();
      //});
    }
    
    loadTour(evt)
    {       
      this.navCtrl.push(TourPage);
      
      // let alert = this.alertCtrl.create({
      //   title: 'Low battery',
      //   subTitle: '10% of battery remaining',
      //   buttons: ['Dismiss']
      // });
      // alert.present();
    }
  }
  