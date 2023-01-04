import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponentComponent } from './data-component/data-component.component';
import{FormsModule} from '@angular/forms';
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    AppComponent,
    DataComponentComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
