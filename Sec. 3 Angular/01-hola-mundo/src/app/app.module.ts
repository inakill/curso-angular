import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; //manually imported component
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component'; //auto generated with ng g c ...

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent, FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
