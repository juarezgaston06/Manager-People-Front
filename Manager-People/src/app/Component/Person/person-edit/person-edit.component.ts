import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';
import { PersonModel } from '../Models/Person.Model';
import { Province } from 'src/app/Interface/Province';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.sass']
})
export class PersonEditComponent implements OnInit {
  formGroup: FormGroup;
  provinces: Province[] = [];
  person: PersonModel = new PersonModel();
  id: string | null;
  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router:Router
  ){
    this.id = this.route.snapshot.paramMap.get('id');
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
    if(this.id != null){
      this.loadForm(parseInt(this.id))
    }
  }

  loadForm(idPerson: number): void{
    this.personService.GetPerson(idPerson).subscribe((pers)=>{
      if(pers){
        this.person = pers;
        this.formGroup = this.formBuilder.group({
          firstName: [pers.firstName, Validators.required],
          lastName: [pers.lastName, Validators.required],
          dni: [pers.dni, Validators.required],
          phone: [pers.phone],
          province: [pers.provinceId]
        });
      }
    })

  }

  assemblePerson(){
    this.person.firstName = this.formGroup.controls["firstName"].value;
    this.person.lastName = this.formGroup.controls["lastName"].value;
    this.person.dni = this.formGroup.controls["dni"].value;
    this.person.phone = this.formGroup.controls["phone"].value;
    this.person.provinceId = this.formGroup.controls["province"].value;
    this.person.modificationDate = new Date();

  }

  modifyPerson(): void{
    this.assemblePerson();
    this.personService.ModificationPerson(this.person).subscribe((res)=>{
      if(res){
        this.snackBar.open(`${this.person.firstName} is create correct`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else{
        this.snackBar.open(`${this.person.firstName} is create incorrect, Please create it again `, 'Close', {
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
