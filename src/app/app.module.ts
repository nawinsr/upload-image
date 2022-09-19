import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperAdminLayoutComponent } from './layouts/super-admin-layout/super-admin-layout.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { SharedModule } from './shared/shared.module';
import { StudioLayoutComponent } from './layouts/studio-layout/studio-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SuperAdminLayoutComponent,
    StudioLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SuperAdminModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
