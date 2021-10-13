import {autoInjectable} from "tsyringe";
import {DataTypes, ModelCtor,} from "sequelize";
import {DbContext} from "./db_context";
import {UserModel} from "../model/user-model";

@autoInjectable()
export class UserRepo {
    userContext: ModelCtor<any>;

    constructor(private dbContext: DbContext) {
        this.userContext = this.dbContext.Context.define('users', {
            // Model attributes are defined here
            Id: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true
            },
            UserName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            NormalizedUserName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            NormalizedEmail: {
                type: DataTypes.STRING,
                allowNull: false
            },
            EmailConfirmed: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            PasswordHash: {
                type: DataTypes.STRING,
                allowNull: false
            },
            IsActive: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            // Other model options go here
            tableName: 'users',
            freezeTableName: true,
            timestamps: false,
            paranoid: false
        });
    }

    async CreateUser(user: UserModel) {
        let result;
        try {
            result = await this.userContext.create({
                UserName: user.UserName,
                Email: user.Email,
                PasswordHash: user.PasswordHash
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
                    IsActive: true
                }
            });
        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async GetUsers() {
        let result;
        try {
            result = await this.userContext.findAll({
                where: {
                    IsActive: true
                },
                limit: 100
            });

        } catch (error) {
            console.error('Unable to read database:', error);
        }
        return result;
    }

    async UpdateUserById(user: UserModel) {
        let result;
        try {
            result = await this.userContext.update({UserName: user.UserName}, {
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
            result = await this.userContext.update({IsActive: true}, {
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

