import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { StudioListComponent } from './studio-list/studio-list.component';
import { SharedModule } from '../shared/shared.module';
import { InviteStudioComponent } from './popups/invite-studio/invite-studio.component';


@NgModule({
  declarations: [
    StudioListComponent,
    InviteStudioComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
  ]
})
export class SuperAdminModule { }
