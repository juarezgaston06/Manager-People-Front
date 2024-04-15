import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/Interface/Person';
import { Province } from 'src/app/Interface/Province';
import { PersonService } from 'src/app/Services/person.service';
import { PersonModel } from '../Models/Person.Model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.sass']
})
export class PersonNewComponent implements OnInit {
  formGroup: FormGroup;
  provinces: Province[] = [];
  person: PersonModel = new PersonModel();
  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private snackBar: MatSnackBar,
    private router:Router
  ){
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      phone: [null],
      province: [null]
    });
  }

  ngOnInit(): void {
    this.personService.GetProvince().subscribe((prov) =>{
      if(prov){
        this.provinces = prov;
      }
    });
  }

  assemblePerson(){
    this.person.firstName = this.formGroup.controls["firstName"].value;
    this.person.lastName = this.formGroup.controls["lastName"].value;
    this.person.dni = this.formGroup.controls["dni"].value;
    this.person.phone = this.formGroup.controls["phone"].value;
    this.person.provinceId = this.formGroup.controls["province"].value.id;
    this.person.entryDate = new Date();
  }

  createPerson(){
    this.assemblePerson();
    this.personService.CreatePerson(this.person).subscribe((res)=>{
      if(res){
        this.snackBar.open(`${this.person.firstName} is create correct`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else{
        this.snackBar.open(`${this.person.firstName} is create incorrect, the dni is repeated `, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    })
  }

  cancelar(){
    this.router.navigate(['/']);
  }
}
