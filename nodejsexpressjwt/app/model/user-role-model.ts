export class UserRoleModel {
    UserId: string;
    RoleId: string;

    constructor(userId: string, roleId: string) {
        this.UserId = userId;
        this.RoleId = roleId;
    }
}