import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './hom/hom.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [  {
  path: '',
  component:HomComponent ,
},
{
  path: 'hom',
  component: HomComponent,
},
{
   path: 'resume',
    component: ResumeComponent,
    
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
