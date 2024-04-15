import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../Interface/Person';
import { HttpClient } from '@angular/common/http';
import { Province } from '../Interface/Province';
import { PersonModel } from '../Component/Person/Models/Person.Model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url="https://localhost:7278/api/People"
  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Person[]> {
     
    return this.http.get<Person[]>(`${this.url}`);

  }

  public GetPerson(idPerson: number): Observable<Person>{
    return this.http.get<Person>(`${this.url}/person/${idPerson}`);
  }

  public GetProvince(): Observable<Province[]>{
    return this.http.get<Province[]>(`${this.url}/provinces`);
  }

  public CreatePerson(person: PersonModel): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}`, person);
  }

  public ModificationPerson(person:PersonModel): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/modify`, person);
  }

  public DeletePerson(idPerson: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/delete/${idPerson}`)
  }
}
