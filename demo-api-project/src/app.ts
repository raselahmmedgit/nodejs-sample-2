import cors = require('cors');
import express = require("express");
import usersRouter from "./routers/user-router";
import {container} from "tsyringe";
import {ApiSettingsService} from "../../demo-library/src/service/api-settings-service";


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', usersRouter);

const settingService = container.resolve(ApiSettingsService);
const setting = settingService.GetSettings();
const port = setting.ApiPort;
const host = setting.ApiHost;

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
});