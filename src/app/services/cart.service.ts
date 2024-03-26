import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  async submitDonation(pForm: any) {
    const response = await fetch(this.baseUrl + '/donation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(pForm),
    });
    const data = await response.json();
    const myUrlWithParams = new URL('http://localhost:4200/checkout');

    myUrlWithParams.searchParams.append('id', data.id);

    window.location.href = myUrlWithParams.href;
    return JSON.stringify(response);
  }
}
