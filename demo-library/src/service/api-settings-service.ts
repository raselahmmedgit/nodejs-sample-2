import {ApiSettings} from "../model/api-settings";
import {singleton} from "tsyringe";
import config from "config";
import {Observable, of} from "rxjs";

@singleton()
export class ApiSettingsService {
    GetSettings(): ApiSettings{
        let settings:ApiSettings = {
            ApiHost: config.get('api.host'),
            ApiPort:config.get('api.port'),
            DatabaseHost:config.get('database.host'),
            DatabasePort:config.get('database.port'),
            DatabaseUsername:config.get('database.username'),
            DatabasePassword:config.get('database.password'),
            DatabaseName:config.get('database.name'),
            Dialect:config.get('database.dialect'),
        };
        return settings;
    }
}
