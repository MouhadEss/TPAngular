import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import {Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService:LoggingService) { }

  assignments:Assignment[] = [
    {
      id:1,
      nom:"TP WebComponents INTENSE",
      dateDeRendu:new Date('2020-11-17'),
      rendu:true
    },
    {
      id:2,
      nom:"TP Angular INTENSE",
      dateDeRendu:new Date('2020-12-03'),
      rendu:false
    },
    {
      id:3,
      nom:"TP React INTENSE",
      dateDeRendu:new Date('2021-01-10'),
      rendu:false
    },
  ];

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  getNewId():number{
    return this.assignments.length+1;
  }

  addAssignment(assignment:Assignment): Observable<String>{
    assignment.id=this.getNewId();
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "Ajouté");
    return of("Assignment id :"+assignment.id+" Ajouté");
  }

  updateAssignment(assignment:Assignment): Observable<String>{
    this.assignments.forEach((a, i)=>{
      if(a === assignment){
        this.assignments[i]=a;
      }
    });
    this.loggingService.log(assignment.nom, "modifié");
    return of("Assignment modifié");
  }

  deleteAssignment(assignment:Assignment): Observable<String>{
    this.assignments.forEach((a, i)=>{
      if(a === assignment){
        this.assignments.splice(i,1);
      }
    });
    this.loggingService.log(assignment.nom, "supprimé");
    return of("Assignment modifié");
  }

  getAssignment(id):Observable<Assignment>{
    return of(this.assignments.find(a=> a.id===id));
  }

   

}
