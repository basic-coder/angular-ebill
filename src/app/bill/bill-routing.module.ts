import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../Bill/about/about.component';
import { ContactComponent } from '../Bill/contact/contact.component';
import { CreateComponent } from '../Bill/create/create.component';
import { EditComponent } from '../Bill/edit/edit.component';
import { HomeComponent } from '../Bill/home/home.component';
import { ResumeComponent } from '../Bill/resume/resume.component';

const routes: Routes = [
  {path:"Bill/home" , component:HomeComponent},
  {path:"Bill/create" , component:CreateComponent},
  {path:"Bill/edit" , component:EditComponent},
  {path:"Bill/about" , component:AboutComponent},
  {path:"Bill/contact" , component:ContactComponent},
  {path:"Bill/resume" , component:ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
