import {Component} from '@angular/core';
import {AppSettingsService} from "./service/app-settings.service";
import {DemoUserService} from "./service/demo-user.service";
import {AppSettings} from "./model/app-settings";
import {User} from "./model/user";

@Component({
  selector: 'lib-demo-angular-library',
  templateUrl: './demo-angular-library.component.html',
  styles: []
})
export class DemoAngularLibraryComponent {
  settings?: AppSettings;
  userCollection?: User[];
  user?: User;
  userName = '';


  constructor(private appSettingsService: AppSettingsService, private demoUserService: DemoUserService) {

  }

  ngOnInit(): void {
    this.demoUserService.GetTopUser().subscribe(user => this.userCollection = user, (error) => {
      console.log(error);
    }, () => {
    });
  }


  addUser() {
    const userToAdd: User = {Name: this.userName};
    if (this.userName != undefined && this.userName != '') {
      this.demoUserService.AddUser(userToAdd).subscribe(user => this.user = user, (error) => {
        console.log(error);
      }, () => {
        this.userCollection?.push({Id: this.user?.Id, Name: this.user?.Name});
        this.userName = '';
      });
    }

  }

  deleteUser(item: User) {
    this.demoUserService.DeleteUserById(Number(item.Id)).subscribe(user => this.user = user, (error) => {
      console.log(error);
    }, () => {
      const index = this.userCollection?.findIndex((element) => element.Id == item.Id);
      this.userCollection?.splice(Number(index), 1);
    });
  }

}
