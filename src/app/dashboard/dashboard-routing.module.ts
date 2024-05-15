import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard.component';
import { ListVoteComponent } from './vote/pages/list-vote/list-vote.component';
import { NewVoteComponent } from './vote/pages/new-vote/new-vote.component';
import { NewCommunityComponent } from './community/pages/new-community/new-community.component';
import { ListCommunityComponent } from './community/pages/list-community/list-community.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'votes',
        loadChildren: () => import('./vote/vote.module').then(m => m.VoteModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./community/community.module').then(m => m.CommunityModule)
      },
      {
        path: '',
        redirectTo: 'votes',
        pathMatch: 'full',
      },
      // {path: '', component: ListVoteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
