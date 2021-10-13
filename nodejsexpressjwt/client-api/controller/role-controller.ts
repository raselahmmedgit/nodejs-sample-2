import express from 'express';
const roleRouter = express.Router();
import "reflect-metadata";
import {RoleService} from "../../app/service/role-service";
import {container} from "tsyringe";
import {RoleModel} from "../../app/model/role-model";

roleRouter.post('/add', async function (req, res) {
    const service = container.resolve(RoleService);
    const role:RoleModel = req.body;
    const result = await service.CreateRole(role);
    res.json(result);
});

roleRouter.get('/index', async function (req, res) {
    const service = container.resolve(RoleService);
    const result = await service.GetRoles();
    res.json(result);
});

roleRouter.put('/edit', async function (req, res) {
    const service = container.resolve(RoleService);
    const role:RoleModel = req.body;
    const result = await service.UpdateRoleById(role);
    res.json(result);
});

roleRouter.delete('/delete/:id', async function (req, res) {
    const service = container.resolve(RoleService);
    const id = Number(req.params.id);
    const result = await service.DeleteRoleById(id);
    res.json(result);
});

roleRouter.get('/get/:id', async function (req, res) {
    const service = container.resolve(RoleService);
    const id = Number(req.params.id);
    const result = await service.GetRoleById(id);
    res.json(result);
});

export default roleRouter;