import "reflect-metadata";
import {RoleRepo} from "../repository/role-repo";
import {RoleModel} from "../model/role-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class RoleService {

    constructor(private _roleRepo: RoleRepo) {
    }

    async CreateRole(role: RoleModel) {
        try {
            const result = await this._roleRepo.CreateRole(role);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async GetRoles() {
        try {
            const result = await this._roleRepo.GetRoles();
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async GetRoleById(id: number) {
        try {
            const result = await this._roleRepo.GetRoleById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async UpdateRoleById(role: RoleModel) {
        try {
            const result = await this._roleRepo.UpdateRoleById(role);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async DeleteRoleById(id: string) {
        try {
            const result = await this._roleRepo.DeleteRoleById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }
}
