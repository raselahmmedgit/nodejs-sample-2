import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {AppSettingsService} from "./app-settings.service";
import {AppSettings} from "../model/app-settings";

@Injectable({
  providedIn: 'root'
})
export class DemoUserService {
  settings?: AppSettings;

  constructor(private http: HttpClient, private appSettingsService: AppSettingsService) {
    this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {
    });
  }

  GetTopUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.settings?.ApiRootUrl}/users`);
  }

  AddUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.settings?.ApiRootUrl}/users`, user as any);
  }

  DeleteUserById(id: number): Observable<User> {
    return this.http.delete<User>(`${this.settings?.ApiRootUrl}/users/${id}`);
  }


}
