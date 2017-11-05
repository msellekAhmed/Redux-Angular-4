import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from "@ngrx/store";
import {metaReducer} from "./common/layout/index";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Provide the application reducer to the store.
    StoreModule.forRoot({ reducer: metaReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
