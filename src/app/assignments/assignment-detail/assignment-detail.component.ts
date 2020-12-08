import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis:Assignment;
  check:boolean=false;
  constructor( private assignmentsService:AssignmentsService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id).subscribe(a=> this.assignmentTransmis=a);
  }

  onAssignmentRendu(){
    this.assignmentTransmis.rendu =true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(m => console.log(m));
    this.assignmentTransmis=null;
  }

  supprimerRendu(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(m=> console.log(m));
    this.check=false;
  }

  onClickEdit(){
    this.router.navigate(['/assignment', this.assignmentTransmis.id, 'edit'],
    {queryParams:{nom:this.assignmentTransmis.nom}, fragment:'edition'});
  }


}
