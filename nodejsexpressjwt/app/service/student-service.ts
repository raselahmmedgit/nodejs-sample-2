import "reflect-metadata";
import {StudentRepo} from "../repository/student-repo";
import {StudentModel} from "../model/student-model";
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class StudentService {

    constructor(private _studentRepo: StudentRepo) {
    }

    async CreateStudent(student: StudentModel) {
        try {
            const result = await this._studentRepo.CreateStudent(student);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async GetStudents() {
        try {
            const result = await this._studentRepo.GetStudents();
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async GetStudentById(id: number) {
        try {
            const result = await this._studentRepo.GetStudentById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async UpdateStudentById(student: StudentModel) {
        try {
            const result = await this._studentRepo.UpdateStudentById(student);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async DeleteStudentById(id: number) {
        try {
            const result = await this._studentRepo.DeleteStudentById(id);
            return result;
        }
        catch (e) {
            throw new Error(e)
        }
    }
}
