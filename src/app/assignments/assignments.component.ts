import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignmentSelectionne:Assignment;
  
  assignments:Assignment[] ;

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments=assignments);
  }


  onAddAssignmentBtnClick(){
    
  }

  onNouvelAssignment(event){
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
   
  }

  onDeletedAssignment(event){
    this.assignmentService.deleteAssignment(event).subscribe(m => console.log(m));
    this.assignmentSelectionne =null;
    
  }

  

}
