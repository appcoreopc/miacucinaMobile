import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  
  constructor(public navCtrl: NavController, 
    private googleMaps: GoogleMaps, public toastCtrl: ToastController) {   

      try {
         this.loadMap();

      } catch (error) {
        
        const toast = this.toastCtrl.create({
          message: error,
          duration: 2000,
          position: 'top'
        });
      }       
    }
    
    loadMap() {

      this.mapElement = document.getElementById('map');    
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        }
      };
      
      this.map = this.googleMaps.create(this.mapElement, mapOptions);
      
      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        const toast = this.toastCtrl.create({
          message: 'Map is ready..',
          duration: 2000,
          position: 'top'
        });
        
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        
        toast.present();
        
        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            
            const toast = this.toastCtrl.create({
              message: 'Map is ready..',
              duration: 2000,
              position: 'top'
            });       
          });
        });
        
      });
    }
    
  }
  