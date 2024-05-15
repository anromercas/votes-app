import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewVoteComponent } from './pages/new-vote/new-vote.component';
import { ListVoteComponent } from './pages/list-vote/list-vote.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'list', component: ListVoteComponent},
        { path: 'new', component: NewVoteComponent},
        { path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }