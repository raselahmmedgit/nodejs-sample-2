import { Injectable } from '@angular/core';
import { AppSettings } from "../model/app-settings";
import {Observable,of} from "rxjs";


@Injectable()
export class AppSettingsService {
  getSettings(): Observable<AppSettings> {
    let settings = new AppSettings();
    return of<AppSettings>(settings);
  }
}
