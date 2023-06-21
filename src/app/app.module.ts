import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './screens/home/home.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LayoutComponent,
        HomeComponent,
        CarouselComponent,
        CategoryComponent,
        CategoryCardComponent,
        ProductComponent,
        ProductCardComponent,
        FacilitiesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbCarouselModule
    ]
})
export class AppModule { }
