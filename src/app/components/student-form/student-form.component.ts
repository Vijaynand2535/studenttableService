import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { studentservice } from 'src/app/services/student.services';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentform: any;

  constructor(
    private _studentform : studentservice
  ) { }

  ngOnInit(): void {
  }
  onTodoAdd(studentform : NgForm){
      if(studentform.valid){
        let obj = studentform.value
        this._studentform.createtodo(obj)
      }
  }
}
