export class ApiSettings {
    ApiHost: any;
    ApiPort: any;

    DatabaseHost: any;
    DatabasePort: any;
    DatabaseUsername: any;
    DatabasePassword: any;
    DatabaseName: any;
    Dialect: any;


    constructor(ApiHost: any, ApiPort: any, DatabaseHost: any, DatabasePort: any, DatabaseUsername: any, DatabasePassword: any, DatabaseName: any, Dialect: any) {
        this.ApiHost = ApiHost;
        this.ApiPort = ApiPort;
        this.DatabaseHost = DatabaseHost;
        this.DatabasePort = DatabasePort;
        this.DatabaseUsername = DatabaseUsername;
        this.DatabasePassword = DatabasePassword;
        this.DatabaseName = DatabaseName;
        this.Dialect = Dialect;
    }
}
