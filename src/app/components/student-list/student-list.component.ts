import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/student.interface';
import { studentservice } from 'src/app/services/student.services';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
studentArr !: Array<Istudent>
  constructor(
    private _studentservice  : studentservice
  ) { }

  ngOnInit(): void {
    this.studentArr = this._studentservice.fetchalltodos();
  }

}
