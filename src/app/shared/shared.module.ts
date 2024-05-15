import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { NavbarComponent } from '../dashboard/navbar/navbar.component';
import { Error404PageComponent } from './error404-page/error404-page.component';

@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
