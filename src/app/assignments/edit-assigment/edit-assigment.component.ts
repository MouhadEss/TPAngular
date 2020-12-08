import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css']
})
export class EditAssigmentComponent implements OnInit {
  assignment: Assignment;

  constructor(private assignnmentService:AssignmentsService,private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.getAssignment();
    const nom=this.route.snapshot.queryParams.nom;
    const fragment= this.route.snapshot.fragment;
    console.log("Query Params : "+nom);
    console.log("Fragment : "+fragment);
  }

  getAssignment() {
    const id = +this.route.snapshot.params.id;
    this.assignnmentService.getAssignment(id)
      .subscribe(a => this.assignment = a);
  }
 

  onSaveAssignment(event){
    event.preventDefault();
    
    this.assignnmentService.updateAssignment(this.assignment)
      .subscribe(message => console.log(message));
 
    this.router.navigate(["/home"]);
 

  }

}
