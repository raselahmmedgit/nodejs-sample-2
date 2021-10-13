import "reflect-metadata";
import {UserRepo} from "../repository/user-repo";
import {UserModel} from "../model/user-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class UserService {

    constructor(private _userRepo: UserRepo) {
    }

    async CreateUser(user: UserModel) {
        try {
            const result = await this._userRepo.CreateUser(user);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async GetUsers() {
        try {
            const result = await this._userRepo.GetUsers();
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
        
    }

    async GetUserById(id: number) {
        try {
            const result = await this._userRepo.GetUserById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async UpdateUserById(user: UserModel) {
        try {
            const result = await this._userRepo.UpdateUserById(user);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async DeleteUserById(id: string) {
        try {
            const result = await this._userRepo.DeleteUserById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }
}
