import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    SearchbarComponent,
    MainComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
