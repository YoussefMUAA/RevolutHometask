import { Component, OnInit} from '@angular/core';
import { Donation } from 'src/app/models/donation.model';
import { CheckoutServiceService } from 'src/app/services/checkout-service.service';
import RevolutCheckout from "@revolut/checkout";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  data: any;

  
  donation: Donation = {
    amount: 1,
    currency: 'GBP',
    description: 'No description',
    state: '',
    donationId: '',
    token: ''
  };

  columnsToDisplay: Array<string> = [
    'donationId',
    'token',
    'amount',
    'currency',
    'description',
  ] ;

  constructor( private checkoutService: CheckoutServiceService ) {
  } ;

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const donation_id =  params.get('id');
      this.checkoutService.getDonation(donation_id)
      .then(data => {
        this.donation = {
          amount: data.amount/100, 
          currency: data.currency,
          description: data.description,
          state: data.state,
          donationId: data.id,
          token: data.token
        };
        return  this.donation; 
      })
      .catch(error => {
        console.error('Error fetching donation');
      });
    };

   
   
    async onPaymentPopup(donation: Donation) {
       
      const revolutCheckout = await RevolutCheckout(donation.token, 'sandbox');
       revolutCheckout.setDefaultLocale('en')
       revolutCheckout.payWithPopup({
        onSuccess() {
          window.alert("Thank you!");
          setTimeout(() => {
            window.location.href = '/home';
          }, 2000);
          
        },
        onError(error) {
          window.alert(`Oh no :( ${error}`);
        },
        onCancel() {
          window.alert("The payment was cancelled.")
        }

      })

    }
    
};
