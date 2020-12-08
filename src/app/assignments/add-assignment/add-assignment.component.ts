import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  nomAssignment="";
  dateRendu:Date;
  assignmentSelectionne:Assignment;

  constructor(private assignmentService:AssignmentsService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.nomAssignment);
    const nouvelAssignment = new Assignment();

    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = this.dateRendu;
    nouvelAssignment.rendu = false;
    this.assignmentService.addAssignment(nouvelAssignment).subscribe(message => console.log(message));
    this.router.navigate(['home']);
  }

}
