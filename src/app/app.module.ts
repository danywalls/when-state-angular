import { ProfileService } from './services/profile.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PaymentsService } from './services/payments.service';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NavigationComponent,
    PaymentsComponent,
    OrdersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProfileService,
    PaymentsService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
