import express from 'express';
const studentRouter = express.Router();
import "reflect-metadata";
import {StudentService} from "../../app/service/student-service";
import {container} from "tsyringe";
import {StudentModel} from "../../app/model/student-model";

studentRouter.post('/add', async function (req, res) {
    const service = container.resolve(StudentService);
    const student:StudentModel = req.body;
    const result = await service.CreateStudent(student);
    res.json(result);
});

studentRouter.get('/index', async function (req, res) {
    const service = container.resolve(StudentService);
    const result = await service.GetStudents();
    res.json(result);
});

studentRouter.put('/edit', async function (req, res) {
    const service = container.resolve(StudentService);
    const student:StudentModel = req.body;
    const result = await service.UpdateStudentById(student);
    res.json(result);
});

studentRouter.delete('/delete/:id', async function (req, res) {
    const service = container.resolve(StudentService);
    const id = Number(req.params.id);
    const result = await service.DeleteStudentById(id);
    res.json(result);
});

studentRouter.get('/get/:id', async function (req, res) {
    const service = container.resolve(StudentService);
    const id = Number(req.params.id);
    const result = await service.GetStudentById(id);
    res.json(result);
});

export default studentRouter;