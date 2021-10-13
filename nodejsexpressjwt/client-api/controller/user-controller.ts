import express from 'express';
const userRouter = express.Router();
import "reflect-metadata";
import {UserService} from "../../app/service/user-service";
import {container} from "tsyringe";
import {UserModel} from "../../app/model/user-model";

userRouter.post('/add', async function (req, res) {
    const service = container.resolve(UserService);
    const user:UserModel = req.body;
    const result = await service.CreateUser(user);
    res.json(result);
});

userRouter.get('/index', async function (req, res) {
    const service = container.resolve(UserService);
    const result = await service.GetUsers();
    res.json(result);
});

userRouter.put('/edit', async function (req, res) {
    const service = container.resolve(UserService);
    const user:UserModel = req.body;
    const result = await service.UpdateUserById(user);
    res.json(result);
});

userRouter.delete('/delete/:id', async function (req, res) {
    const service = container.resolve(UserService);
    const id = Number(req.params.id);
    const result = await service.DeleteUserById(id);
    res.json(result);
});

userRouter.get('/get/:id', async function (req, res) {
    const service = container.resolve(UserService);
    const id = Number(req.params.id);
    const result = await service.GetUserById(id);
    res.json(result);
});

export default userRouter;