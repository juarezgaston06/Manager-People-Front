import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonTableComponent } from './Component/Person/person-table/person-table.component';
import { PersonNewComponent } from './Component/Person/person-new/person-new.component';
import { PersonEditComponent } from './Component/Person/person-edit/person-edit.component';

const routes: Routes = [
  {path: '', component: PersonTableComponent},
  {path: 'create', component: PersonNewComponent},
  {path: 'edit/:id', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
