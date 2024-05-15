import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCommunityComponent } from './pages/new-community/new-community.component';
import { ListCommunityComponent } from './pages/list-community/list-community.component';
import { CommunityRoutingModule } from './community-router.module';



@NgModule({
  declarations: [
    NewCommunityComponent,
    ListCommunityComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
