export class RegisterModel {
    EmailAddress: string;
    Password: string;
    ConfirmPassword: string;
    RoleName: string;

    constructor(emailAddress: string, password: string, confirmPassword: string, roleName: string) {
        this.EmailAddress = emailAddress;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
        this.RoleName = roleName;
    }
}