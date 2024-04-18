import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Import your components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeComponent } from './college/college.component';  // Renamed from PaintingComponent

// Import your service
import { CollegeDataService } from './college-data.service';  // Renamed from PaintingDataService

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollegeComponent  // Renamed from PaintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CollegeDataService  // Renamed from PaintingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
