import { Component } from '@angular/core';
import { TourService } from '../../service/tourService';
import { PaymentService } from '../../service/paymentService';
import { TourLocationService } from '../../service/tourLocationService';

import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions,  CameraPosition,
  MarkerOptions, Marker } from '@ionic-native/google-maps';
  
  @Component({
    selector: 'page-home',
    templateUrl: 'tour.html',  
    providers: [TourService, PaymentService, TourLocationService]
  })
  export class TourPage {
    data : any;     
    countryData : any; 
    cityData : any;
    
    constructor(public navCtrl: NavController, 
      private service: TourService, private loader: LoadingController,
      private alertCtrl: AlertController, private paymentService: PaymentService ) {
        
        let loadingUI = this.loader.create({ content: 'Starting tour ...' });
        loadingUI.present();
        this.service.getFeed().then(data => {
          this.data = data.articles;          
          loadingUI.dismiss();
        });
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
      
      purchaseTour()
      {                
        console.log('purchasing tour!!')
        this.paymentService.payTour();    
        console.log('paid!')    
      }
      
    }
    