import {NgModule} from '@angular/core';
import {DemoAngularLibraryComponent} from './demo-angular-library.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DemoAngularLibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    DemoAngularLibraryComponent
  ]
})
export class DemoAngularLibraryModule {
}
