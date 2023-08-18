import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
/* API reference for Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; 
import { MatPaginatorModule } from '@angular/material/paginator';

/* Components generated */
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, BodyComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

