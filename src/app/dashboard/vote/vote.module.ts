import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVoteComponent } from './pages/new-vote/new-vote.component';
import { VoteRoutingModule } from './vote-router.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    NewVoteComponent
  ],
  imports: [
    CommonModule,
    VoteRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class VoteModule { }
