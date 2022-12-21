import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoAngularLibraryModule} from "../../../demo-angular-library/src/lib/demo-angular-library.module";
import {root} from "rxjs/internal-compatibility";
import {AppSettingsService} from "../../../demo-angular-library/src/lib/service/app-settings.service";
import {DemoUserService} from "../../../demo-angular-library/src/lib/service/demo-user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoAngularLibraryModule,
    HttpClientModule
  ],
  providers: [AppSettingsService,DemoUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
