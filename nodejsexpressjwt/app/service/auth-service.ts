import "reflect-metadata";
import { UserRepo } from "../repository/user-repo";
import { RoleRepo } from "../repository/role-repo";
import { LoginModel } from "../model/login-model";
import { RegisterModel } from "../model/register-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class AuthService {

    constructor(private _userRepo: UserRepo, private _roleRepo: RoleRepo) {
    }

    async Login(login: LoginModel) {
        try {
            const result = login;
            return result;
        }
        catch (e) {
            throw new Error(e);
        }
    }

    async Logout(login: LoginModel) {
        try {
            const result = login;
            return result;
        }
        catch (e) {
            throw new Error(e);
        }
    }

}
