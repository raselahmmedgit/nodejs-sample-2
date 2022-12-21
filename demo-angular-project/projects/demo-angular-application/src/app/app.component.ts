import {Component} from '@angular/core';
import {AppSettingsService} from "../../../demo-angular-library/src/lib/service/app-settings.service";
import {AppSettings} from "../../../demo-angular-library/src/lib/model/app-settings";
import {DemoUserService} from "../../../demo-angular-library/src/lib/service/demo-user.service";
import {User} from "../../../demo-angular-library/src/lib/model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-application';

  constructor(private appSettingsService: AppSettingsService, private demoUserService: DemoUserService) {

  }

  ngOnInit(): void {
  }
}
