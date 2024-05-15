import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
// import { AuthComponent } from './pages/auth/auth.component';
import { AuthComponent } from './pages/auth/auth.component';

// Modules
import { AuthRoutingModule } from './auth-router.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AuthComponent,
    LayoutPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AuthModule { }
