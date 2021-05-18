import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductCardComponent,
    StatsComponent,
    StatsCardComponent,
    CartComponent,
    AdminComponent,
    AddProductComponent,
    HomeComponent,
    AdminPageComponent,
    StatsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
