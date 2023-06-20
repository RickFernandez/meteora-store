import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './screens/home/home.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LayoutComponent,
        HomeComponent,
        CarouselComponent
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
