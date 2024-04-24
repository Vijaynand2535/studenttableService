import { Injectable } from "@angular/core";
import { Istudent } from "../models/student.interface";


@Injectable({
    providedIn : 'root'
})
export class studentservice{
 studentArr : Array<Istudent> = [
    // {
    //     fname : "vijay",
    //     lname : "benkunde",
    //     email : "vebnkunde123@gmail.com",
    //     contact : 8408802535,
    //     id : 1
        
    // },
    // {
    //     fname : "rajesh",
    //     lname : "patil",
    //     email : "rajeshpatil123@gmail.com",
    //     contact : 54278921,
    //     id : 2
    // },
    // {
    //     fname : "john",
    //     lname : "doe",
    //     email : "johndoe23@gmail.com",
    //     contact : 8796523145,
    //     id : 3
    // }
 ]
 fetchalltodos() : Array<Istudent>{
    // API call to fetch TODO data from DB
    return this.studentArr
   }

   createtodo(student : Istudent){
    //API call to create new todo item
    student = {...student,id: Math.floor(Math.random() * 10)}
    this.studentArr.push(student)
   }
}