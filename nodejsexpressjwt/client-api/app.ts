import cors from 'cors';
import express from 'express';
import path from 'path';
import homeController from "./controller/home-controller";
import roleController from "./controller/role-controller";
import userController from "./controller/user-controller";
import studentController from "./controller/student-controller";
import {container} from "tsyringe";
import {AppSettingsService} from "./../app/service/app-settings-service";


const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'view')));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Declare application router
app.use('/', homeController);
app.use('/role', roleController);
app.use('/user', userController);
app.use('/student', studentController);
//Declare application router

const settingService = container.resolve(AppSettingsService);
const setting = settingService.GetSettings();
const port = setting.AppPort;
const host = setting.AppHost;

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
});