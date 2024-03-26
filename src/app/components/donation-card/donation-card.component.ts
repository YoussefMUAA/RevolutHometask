import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Donation} from 'src/app/models/donation.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-donation-card',
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.css']
})
export class DonationCardComponent implements OnInit {
  
  myDonation: FormGroup;
  

  donation: Donation = {
    amount: 1,
    currency: 'GBP',
    description: 'No description',
    state: '',
    donationId: '',
    token: ''
  };
  


  constructor(private cartService: CartService) { 
    this.myDonation = new FormGroup({
    amount: new FormControl( 0, [Validators.required]),
    currency:  new FormControl( 'GBP' , [Validators.required]),
    description: new FormControl()
    })
  }



  ngOnInit(): void {
  };

  submitDonation(): void {
    if (this.myDonation.valid) {
      this.myDonation.value.amount = this.myDonation.value.amount*100;
      this.cartService.submitDonation(this.myDonation.value);
      this.myDonation.reset()
    } else {
      window.alert("Please enter a valid donation");
      this.myDonation.reset()
    }
  }


}
