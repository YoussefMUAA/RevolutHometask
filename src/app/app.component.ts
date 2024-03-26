import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `
  ,
  styles: []
})
export class AppComponent implements OnInit{
  
  title = 'HomeTask';

  constructor( private cartService: CartService) {}
  
  ngOnInit(): void {
    
  }
}
