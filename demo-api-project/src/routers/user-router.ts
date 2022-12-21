import "reflect-metadata";
import {UserService} from "../../../demo-library/src/service/user-service";
import {Router} from 'express';
import {container} from "tsyringe";
import {UserModel} from "../../../demo-library/src/model/user-model";

const usersRouter = Router();



usersRouter.post('/', async function (req, res) {
    const service = container.resolve(UserService);
    const user:UserModel = req.body;
    const result = await service.CreateUser(user);
    res.json(result);
});

usersRouter.get('/', async function (req, res) {
    const service = container.resolve(UserService);
    const result = await service.GetTopUser();
    res.json(result);
});


usersRouter.put('/', async function (req, res) {
    const service = container.resolve(UserService);
    const user:UserModel = req.body;
    const result = await service.UpdateUserById(user);
    res.json(result);
});

usersRouter.delete('/:userId', async function (req, res) {
    const service = container.resolve(UserService);
    const id = Number(req.params.userId);
    const result = await service.DeleteUserById(id);
    res.json(result);
});

usersRouter.get('/:userId', async function (req, res) {
    const service = container.resolve(UserService);
    const id = Number(req.params.userId);
    const result = await service.GetUserById(id);
    res.json(result);
});





export default usersRouter;