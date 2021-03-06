import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import {Routes, RouterModule} from '@angular/router';
import { EditAssigmentComponent } from './assignments/edit-assigment/edit-assigment.component'
import { AuthGuard } from './shared/auth.guard';
import { LoginUserComponent } from './assignments/login-user/login-user.component';
import { AdminGuard } from './shared/admin.guard';

const routes:Routes =[
  {path: '', component:AssignmentsComponent},
  {path: 'home', component:AssignmentsComponent},
  {path: 'add', component:AddAssignmentComponent, canActivate:[AuthGuard]},
  {path: 'assignment/:id', component:AssignmentDetailComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginUserComponent},
  {path: 'assignment/:id/edit', component:EditAssigmentComponent, canActivate:[AdminGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssigmentComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule,
    MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule,
    MatListModule,MatCardModule,
    FormsModule,MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
