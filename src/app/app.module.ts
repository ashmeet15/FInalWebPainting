import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Import each component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaintingComponent } from './painting/painting.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaintingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
