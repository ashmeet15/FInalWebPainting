
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaintingComponent } from './Painting/Painting.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    PaintingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
