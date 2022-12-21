import {autoInjectable} from "tsyringe";
import {DataTypes, ModelCtor,} from "sequelize";
import {DbContext} from "./db_context";
import {UserModel} from "../model/user-model";

@autoInjectable()
export class UserRepo {
    userContext: ModelCtor<any>;

    constructor(private dbContext: DbContext) {
        this.userContext = this.dbContext.Context.define('TestUser', {
            // Model attributes are defined here
            Id: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            IsDeleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        }, {
            // Other model options go here
            tableName: 'test_user',
            freezeTableName: true,
            timestamps: false,
            paranoid: false
        });
    }

    async CreateUser(user: UserModel) {
        let result;
        try {
            result = await this.userContext.create({
                Name: user.Name,
                IsDeleted: false
            });
        } catch (error) {
            console.error('Unable to Create database: ', error);
        }
        return result;
    }

    async GetUserById(id: number) {
        let result;
        try {
            result = await this.userContext.findOne({
                where: {
                    id: id,
                    IsDeleted: false
                }
            });
        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async GetTopUser() {
        let result;
        try {
            result = await this.userContext.findAll({
                where: {
                    IsDeleted: false
                },
                limit: 10
            });

        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async UpdateUserById(user: UserModel) {
        let result;
        try {
            result = await this.userContext.update({Name: user.Name}, {
                where: {
                    Id: user.Id
                },
                limit: 1,
                returning: true
            });
        } catch (error) {
            console.error('Unable to update database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }

    async DeleteUserById(id: number) {
        let result;
        try {
            result = await this.userContext.update({IsDeleted: true}, {
                where: {
                    Id: id
                },
                limit: 1,
                returning: true
            });

        } catch (error) {
            console.error('Unable to delete database:', error);
        }
        return result == undefined ? "Unable to update database" : result[1][0];
    }
}

