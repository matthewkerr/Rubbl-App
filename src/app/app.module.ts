import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchService } from './components/search/search.service';
import { SliderComponent } from './components/slider/slider.component';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FeaturedComponent,
    HeaderComponent,
    ProductsComponent,
    SliderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
