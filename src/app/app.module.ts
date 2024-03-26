import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';

import { DonationCardComponent } from './components/donation-card/donation-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationCardComponent,
    CheckoutComponent,
    HomeComponent,
    HeaderComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
