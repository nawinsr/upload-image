import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioListComponent } from './studio-list/studio-list.component';

const routes: Routes = [
  {path:'studio-list',component:StudioListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
