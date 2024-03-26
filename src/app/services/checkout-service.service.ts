import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckoutServiceService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  async getDonation(donation_id: any) {
    const response = await fetch(`${this.baseUrl}/checkout/${donation_id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    let data = await response.json();
    return data;
  }
  catch(error: any) {
    console.error('There is an error in the service', error);
  }
}
