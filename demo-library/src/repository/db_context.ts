import {Sequelize,} from "sequelize";
import {singleton} from "tsyringe";
import {ApiSettingsService} from "../service/api-settings-service";
import {ApiSettings} from "../model/api-settings";

@singleton()
export class DbContext {
    // sequalize = new Sequelize("mssql://sa:12345@localhost:61910/test_db");

    Context: Sequelize;

    constructor(private settingService: ApiSettingsService) {
        const result = settingService.GetSettings();
        this.Context = new Sequelize({
            dialect: result.Dialect,
            host: result.DatabaseHost,
            port: result.DatabasePort,
            username: result.DatabaseUsername,
            password: result.DatabasePassword,
            database: result.DatabaseName
        });

    }
}