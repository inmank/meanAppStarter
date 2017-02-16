import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TitleComponent} from "./title/title.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {TableComponent} from "./table/table.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
    TitleComponent,
    NavigationComponent,
    TableComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
