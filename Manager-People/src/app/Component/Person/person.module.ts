import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PersonTableComponent,
    PersonNewComponent,
    PersonEditComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class PersonModule { }
