import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@Injectable()
export class PaymentService {

    constructor(private payPal: PayPal) 
    {
    }    
    
    payTour()
    {       
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AUWRA4IfU1x319g1VPihvALyUKf7ync-cbmdJ1kEMkNPI4F_0DkpE9TFdKsYeUHrpLKf-MRPN5DCFLLe'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new PayPalPayment('99.93', 'NZD', 'Description', 'Tour Sales');
                this.payPal.renderSinglePaymentUI(payment).then((status) => {
                    console.log(status);
                }, (e) => {
                    console.log('error');   
                    console.log(e);
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });        
    }     
}

