import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TourPage } from '../pages/tours/tour';
import { GoTourPage } from '../pages/goTour/goTour';
import { RegisterPage } from '../pages/register/register';
import { FeedbackPage } from '../pages/feedback/feedback';

import { TourService } from '../service/tourService';
import { PaymentService } from '../service/paymentService';
import { TourLocationService } from '../service/tourLocationService';

import { HttpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TourPage, 
    GoTourPage, RegisterPage, FeedbackPage
  ],
  imports: [
    BrowserModule, HttpModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, TourPage, GoTourPage, RegisterPage, FeedbackPage
  ],
  providers: [
    StatusBar,
    PayPal,
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
