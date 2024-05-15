import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommunityComponent } from './pages/list-community/list-community.component';
import { NewCommunityComponent } from './pages/new-community/new-community.component';
import { UpdateCommunityOwnersComponent } from './pages/update-community-owners/update-community-owners.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'list', component: ListCommunityComponent },
        { path: 'new', component: NewCommunityComponent },
        { path: 'update-owners', component: UpdateCommunityOwnersComponent },
        { path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }