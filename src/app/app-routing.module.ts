import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StudioLayoutComponent } from './layouts/studio-layout/studio-layout.component';
import { SuperAdminLayoutComponent } from './layouts/super-admin-layout/super-admin-layout.component';

const routes: Routes = [


  {
    path: '',
    component: StudioLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule)
      }
    ]
  },
  { path: "**",redirectTo:"create"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
