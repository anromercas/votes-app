import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
        { path: 'login', component: AuthComponent },
        { path: 'register', component: RegisterComponent },
        { path: '**', redirectTo: 'login'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }