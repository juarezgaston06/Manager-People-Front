import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../../../Interface/Person';
import { PersonService } from 'src/app/Services/person.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.sass']
})
export class PersonTableComponent implements OnInit  {
  public displayedColumns: string[] = ["name", "lastName", "dni", "province", "accion"];
  public persons: Person[] = [];
  public dataSource = new MatTableDataSource<Person>(this.persons);
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(
    private personServices: PersonService,
    private router:Router,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    this.personServices.GetAll().subscribe((pers)=>{
      if(pers){
        this.dataSource.data = pers;
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }

  edit(idPerson: number): void{
    this.router.navigate(['/edit', idPerson]);
  }

  public create(): void{
    this.router.navigate(['/create']);
  }

  public delete(person: Person): void{
    this.personServices.DeletePerson(person.id).subscribe((res)=>{
      if(res){
        this.snackBar.open(`${person.firstName} is delete correct`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }
    });
  }
}
